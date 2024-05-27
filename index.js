import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter firstnumber",
        type: "number",
        name: "Firstnumber",
    },
    { message: "Enter secondnumber", type: "number", name: "Secondnumber" },
    {
        message: "Select one of the operators to perform operations",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus",
            "Exponentiation",
            "BMI",
        ],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else if (answer.operator === "Modulus") {
    console.log(answer.Firstnumber % answer.Secondnumber);
}
else if (answer.operator === "Exponentiation") {
    console.log(answer.Firstnumber ** answer.Secondnumber);
}
else if (answer.operator === "BMI") {
    console.log(answer.Firstnumber / (answer.Secondnumber * answer.Secondnumber));
}
else {
    console.log("Please select a valid operator");
}
