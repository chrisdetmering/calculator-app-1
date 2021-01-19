let display = document.getElementById("output");
display.textContent = '0';
let num1 = '';
let num2 = '';
let operation = undefined;

function clearDisplay() { 
  num1 = ''; 
  num2 = ''; 
  display.textContent = '0'; 
  operation = undefined; 
}

document.querySelectorAll(".btn.numbers").forEach(button => { 
  button.addEventListener("click", handleNumberClick)
})

document.querySelectorAll(".btn.operators").forEach(button => { 
  button.addEventListener("click", handleOperatorClick)
})

document.querySelector(".btn.equal")
.addEventListener("click", () => { 
    if (num1 && num2 && operation) { 
      const newOperation = null; 
      calculate(newOperation)
    }
})

document.querySelector('.btn.special-clear')
.addEventListener("click", () => { 
  clearDisplay(); 
})


function handleOperatorClick(event) { 
  const operator = event.target.value; 
  const operations = { 
    '+':add, 
    '-':subtract, 
    'x':multiply, 
    '÷':divide,
  }

  if (!operation) { 
   operation = operations[operator]; 
   return; 
  } 

  const newOperation = operations[operator]; 
  calculate(newOperation)
}


function handleNumberClick(event) {
  if (display.textContent.length === 10) { return; }
  const number = event.target.value;  

  if (!operation) { 
    num1 += number; 
    display.textContent = parseFloat(num1).toLocaleString(); 
    return; 
  } 
    num2 += number; 
    display.textContent = parseFloat(num2).toLocaleString(); 
}

function calculate(newOperation) { 
  const result = operation(); 
    num1 = result; 
    num2 = ''; 
    operation = newOperation; 
    display.textContent = result; 
}

function add() {
   return (parseFloat(num1) + parseFloat(num2)).toLocaleString();
}

function subtract() {
  return (parseFloat(num1) - parseFloat(num2)).toLocaleString();
}

function multiply() {
  return (parseFloat(num1) * parseFloat(num2)).toLocaleString();
}

function divide() {
  return (parseFloat(num1) / parseFloat(num2)).toLocaleString();
}

