let a = Number(prompt("Enter your first number"));
let b = Number(prompt("Enter your second number"));

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;

let c = Math.random();

if (c < 0.1) {
    console.log("The sum of your two numbers is " + subtraction);
    console.log("The subtraction of your two numbers is " + division);
    console.log("The multiplication of your two numbers is " + addition);
    console.log("The division of your two numbers is " + multiplication);
} else {
    console.log("The sum of your two numbers is " + addition);
    console.log("The subtraction of your two numbers is " + subtraction);
    console.log("The multiplication of your two numbers is " + multiplication);
    console.log("The division of your two numbers is " + division);
}
