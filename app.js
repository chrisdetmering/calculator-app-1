document.addEventListener("click", getBtnValue);

let output = document.getElementById("output");

function getBtnValue(e) {
  let targetBtn = e.target.value;
  targetBtn == "C"
    ? clearCalc()
    : targetBtn == "="
    ? returnSum()
    : targetBtn == "+"
    ? returnSum()
    : targetBtn == "x"
    ? returnSum()
    : targetBtn == "÷"
    ? returnSum()
    : returnNum();

  renderScreen(targetBtn);
}

function renderScreen(targetBtn) {
  console.log(targetBtn);
  console.log(output.textContent);
  let y = output.textContent + targetBtn;
  document.getElementById("output").textContent = parseInt(y);
}

function clearCalc() {
  console.log("Special");
  output.textContent = "0";
}

function returnSum() {
  console.log("Operator");
}

function returnNum() {
  console.log("Number");
}

// GOAL: Calculator that can do basic math

// Display at least 10 digits on screen
// (HTML)
// Display decimals to at least the thousandth(.001)
//

// IF "+" is pressed
// ADD user value to existing value
// ELSE if user presses "-"
// SUBTRACT user value from existing value
// ELSE IF user presses "DIVIDE"
// DIVIDE user value from existing value
// ELSE IF user presses "X"
// MULTIPLY user value with existing value
// ELSE IF user presses "="
// resolve equasion
// ELSE IF user presses "C"
// reset internal values and screen to '0'

// Example check
// 5 + 10 * 3 / 2 == 20
// AND
// 5 + 10 * 3 = 35 / 2 == 17.5
