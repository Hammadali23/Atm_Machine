#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 15000; // Dollar
let myPin = 7860;

let PinAnswer = await inquirer.prompt({
  name: "Pin",
  message: "Enter your Pin Code",
  type: "number",
});
if (PinAnswer.Pin === myPin) {
  console.log("Correct Pin Code");

  let operationAsnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "checkBalance", "fastCash"],
    },
  ]);
  if (operationAsnswer.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (myBalance > amountAns.amount) {
      myBalance -= amountAns.amount;
      console.log(`Your new Balance is ${myBalance}`);
    } else {
      console.log("Insufficient funds");
    }
  } else if (operationAsnswer.operation === "checkBalance") {
    console.log(`your balance is: ${myBalance}`);
  }
  if (operationAsnswer.operation === "fastCash") {
    let fastCashAmount = await inquirer.prompt([
      {
        name: "amount",
        message: "fastCash Amount",
        type: "list",
        choices: ["500", "1000", "1500", "2000"],
      },
    ]);
    if (myBalance > fastCashAmount.amount) {
      myBalance -= fastCashAmount.amount;
      console.log(`Your new Balance is ${myBalance}`);
    } else {
      console.log("Insufficient funds");
    }
  }
} else {
  console.log("Incorrect Pin Code");
}
