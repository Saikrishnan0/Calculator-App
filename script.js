let display = document.getElementById("display");
let expression = "";

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = "";
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
}

function clearDisplay() {
  display.value = "";
  expression = "";
}

function deleteLastEntry() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

// Additional Functions for Scientific Calculator Features
function calculateSquareRoot() {
  expression = Math.sqrt(eval(expression)).toString();
  display.value = expression;
}

function calculatePower() {
  expression = Math.pow(eval(expression)).toString();
  display.value = expression;
}

function calculateSine() {
  expression = Math.sin(eval(expression)).toString();
  display.value = expression;
}

function calculateCosine() {
  expression = Math.cos(eval(expression)).toString();
  display.value = expression;
}
