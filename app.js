let calcDisplay;
let calcValue1;
let calcValue2;
let calcOperator;
let calcResult;

function appInit() {
  let userClick = document.querySelectorAll(".btn");
  let eachBtn;
  for (eachBtn = 0; eachBtn < userClick.length; eachBtn++) {
    userClick[eachBtn].addEventListener("click", evalBtnClick);
  }

  calcValue1 = 0;
  calcValue2 = 0;
  calcOperator = undefined;
  calcResult = 0;

  calcDisplay = document.getElementById("output");

  calcDisplay.textContent = 0;
}

function evalBtnClick(e) {
  let clickedBtn = e.target.value;

  // isNaN(clickedBtn) ? operatorAction(clickedBtn) : numberAction(clickedBtn);
  isNaN(clickedBtn) ? doMaths(clickedBtn) : numberAction(clickedBtn);
}

function operatorAction(clickedBtn) {
  calcOperator = clickedBtn;
  clickedBtn == "C"
    ? appInit()
    : clickedBtn == "+"
    ? additionCalc()
    : clickedBtn == "-"
    ? subtractionCalc()
    : clickedBtn == "x"
    ? multiplicationCalc()
    : clickedBtn == "÷"
    ? divisionCalc()
    : null;
}

function numberAction(clickedBtn) {
  !calcOperator
    ? ((calcValue1 = calcValue1 + clickedBtn),
      (calcDisplay.textContent = parseInt(calcValue1)))
    : ((calcValue2 = calcValue2 + clickedBtn),
      (calcDisplay.textContent = parseInt(calcValue2)));
}

//////////////////////  TESTING DIFFERENT LOGIC

function doMaths(clickedBtn) {
  calcResult = parseInt(calcValue1) + clickedBtn + parseInt(calcValue2);
  console.log(calcResult);
  calcValue1 = calcResult;
  calcValue2 = 0;
  calcDisplay.textContent = calcValue1.toFixed(3);
}

///////////////////// TESTING DIFFERENT LOGIC

function additionCalc() {
  if (calcValue2) {
    calcResult = parseInt(calcValue1) + parseInt(calcValue2);
    calcValue1 = calcResult;
    calcValue2 = 0;
    calcDisplay.textContent = calcValue1.toFixed(3);
  }
}

function subtractionCalc() {
  if (calcValue2) {
    calcResult = parseInt(calcValue1) - parseInt(calcValue2);
    calcValue1 = calcResult;
    calcValue2 = 0;
    calcDisplay.textContent = calcValue1.toFixed(3);
  }
}

function multiplicationCalc() {
  if (calcValue2) {
    calcResult = parseInt(calcValue1) * parseInt(calcValue2);
    calcValue1 = calcResult;
    calcValue2 = 0;
    calcDisplay.textContent = calcValue1.toFixed(3);
  }
}

function divisionCalc() {
  if (calcValue2) {
    calcResult = parseInt(calcValue1) / parseInt(calcValue2);
    calcValue1 = calcResult;
    calcValue2 = 0;
    calcDisplay.textContent = calcValue1.toFixed(3);
  }
}

appInit();
