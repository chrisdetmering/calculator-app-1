document.addEventListener("click", getBtnValue);

let output = document.getElementById("output");
let calc;

function getBtnValue(e) {
  let targetBtn = e.target.value;
  targetBtn == "C"
    ? clearCalc()
    : targetBtn == "="
    ? rtnEquals(`=`)
    : targetBtn == "+"
    ? rtnOperator(`+`)
    : targetBtn == "-"
    ? rtnOperator(`-`)
    : targetBtn == "x"
    ? rtnOperator(`*`)
    : targetBtn == "÷"
    ? rtnOperator(`/`)
    : rtnInt();

  renderScreen(targetBtn);
}
function clearCalc() {
  output.textContent = 0;
  calc = 0;
}

function rtnEquals() {
  let xd = Function(`return ` + calc)();
  console.log(xd);
}

function rtnOperator(targetBtn) {
  calc += parseInt(output.textContent);
  calc += targetBtn;
  console.log(calc);
  //output.textContent = "";
}

function rtnInt() {
  //unfinished code
}

function renderScreen(targetBtn) {
  let y = output.textContent + targetBtn;
  output.textContent = parseInt(y);
}

// Example check
// 5 + 10 * 3 / 2 == 20
// AND
// 5 + 10 * 3 = 35 / 2 == 17.5

// exp = '1 + 1'
// x = Function('return ' + exp)()
// console.log(x)
