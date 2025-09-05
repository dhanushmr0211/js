
console.log("Welcome to the JavaScript learning path!");

// 1. Print a message to the console
console.log("Hello, JavaScript!");


// 2. Declare a variable and assign a value
let name = "Alice";
console.log("My name is " + name);
const student = {
    name: "dhanush",
    age: 20,
    course: "B.Tech"
}
console.log( student.name);
student.age = student.age + 1;
console.log("Updated age: " + student.age);
console.log("Student details: ", student);

//conditional statements
if (student.age > 18) {
    console.log(student.name + " is an adult.");
} else if (student.age === 18) {
    console.log(student.name + " is exactly 18 years old.");
} else {
    console.log(student.name + " is a minor.");
}

//ternary operator
let status = (student.age >= 18) ? "Adult" : "Minor";
console.log(student.name + " is an " + status);

//loops and strings
for (let i = 0; i < 5; i++) {
    console.log("Loop iteration: " + i);
}

//calculate sum from 1 to 10
let sum = 0;
for(let i = 0; i<= 10   ; i++) {
    sum = sum +i;
}
console.log("Sum from 1 to 10 is: " + sum);

//infinite loop example
//while (true) {
 //   console.log("This will run forever");
//}   


//do while loop
let j = 0;
do {
    console.log("Count is: " + j);
    j++;
} while (j < 5);


//for-of loop
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log("Fruit: " + fruit);
}

//for-in loop
let person = { name: "Alice", age: 25 };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//printing even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Even number: " + i);
    }
}

//asking user to guess the game number until they get it right
                     
let secretNumber = 7;
let userGuess;

while (parseInt(userGuess) !== secretNumber) {
    userGuess = prompt("Guess the secret number (between 1 and 10):");
    if (parseInt(userGuess) !== secretNumber) {
        cons=ole.log("Sorry, that's not correct. Try again!");
    }
}

console.log("Congratulations! You guessed the right number.");

//string indexing
let str = "dhanush";
console.log(str[0])

//template literals
console.log(`My name is ${str}.`)
console.log(`Next year, I will be ${student.age + 1} years old.`)
