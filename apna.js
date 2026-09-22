console.log("=== JavaScript Basics: Learn by Reading Console Output ===");

// 1) Variables
const studentName = "Dhanush";
let age = 20;
console.log("Name:", studentName);
console.log("Age:", age);

// 2) Numbers and operators
const a = 10;
const b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);

// 3) Strings and template literals
const city = "Chennai";
console.log("City: " + city);
console.log(`${studentName} lives in ${city}.`);

// 4) Objects
const student = {
  name: studentName,
  age,
  course: "B.Tech"
};
console.log("Student object:", student);
student.age += 1;
console.log("Updated age:", student.age);

// 5) Conditionals
if (student.age > 18) {
  console.log("Adult");
} else if (student.age === 18) {
  console.log("Exactly 18");
} else {
  console.log("Minor");
}

const status = student.age >= 18 ? "Adult" : "Minor";
console.log("Ternary result:", status);

// 6) Loops
console.log("For loop (0 to 4):");
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}

let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
}
console.log("Sum 1 to 10:", total);

// 7) Arrays
const fruits = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);
fruits.push("orange");
console.log("After push:", fruits);
fruits.pop();
console.log("After pop:", fruits);

for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// 8) Functions
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Learner"));

const square = (n) => n * n;
console.log("Square of 5:", square(5));

// 9) Useful array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);

console.log("=== End of basics. Open script.js for more topics. ===");
