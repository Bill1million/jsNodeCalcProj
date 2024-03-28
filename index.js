const rs = require("readline-sync");

const knownOperation = ["/", "*", "-", "+"];

const getOperation = (list) => {
  while (true) {
    const whatOperation = rs.question(
      "What operation are you trying to perform? "
    );
    if (list.includes(whatOperation)) {
      return whatOperation;
    } else {
      console.log("That is not a valid operation. Please try again.");
    }
  }
};
const getNum = (order) => {
  while (true) {
    let inputNumber = rs.question(
      `What is the ${order} number of the equation? `
    );
    if (!isNaN(inputNumber) && inputNumber !== "") {
      return parseFloat(inputNumber);
    } else {
      console.log("This is not a number");
    }
  }
};
const getResult = (chosenOperator, numOne, numTwo) => {
  switch (chosenOperator) {
    case "+":
      return numOne + numTwo;
    case "-":
      return numOne - numTwo;
    case "*":
      return numOne * numTwo;
    case "/":
      return numOne / numTwo;
  }
};

const calculator = (arrOperations) => {
  const chosenOperator = getOperation(arrOperations);
  const numOne = getNum("first");
  const numTwo = getNum("second");
  const result = getResult(chosenOperator, numOne, numTwo);
  console.log(
    "The result is: " + result + " Where " + result + " is the actual Number."
  );
};

calculator(knownOperation);
