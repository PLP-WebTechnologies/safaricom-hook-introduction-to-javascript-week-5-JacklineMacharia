// Part 1 question 1
// Declare variables of different types
let Name = "John Doe";
let Age = 25; 
let isStudent = true;
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isStudent: true
};

// Print values and types in the console
console.log("Name:", Name, "(Type:", typeof Name + ")");
console.log("Age:", Age, "(Type:", typeof Age + ")");
console.log("Is student:", isStudent, "(Type:", typeof isStudent + ")");
console.log("Hobbies:", hobbies, "(Type:", typeof hobbies + ")");
console.log("Person:", person, "(Type:", typeof person + ")");


// Question 2
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
        return;
    }
    if (!['+', '-', '*', '/'].includes(operation)) {
        console.log("Please choose a valid operation (+, _, *, /).");
        return;
    }
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2: "Cannot divide by zero ";
            break;
        default:
            result = "Invalid operation";
        
    }
    console.log('Result: ${result}');
}
calculator();



