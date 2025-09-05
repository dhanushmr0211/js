// 1. Print a message to the console
console.log("Hello, JavaScript!");

// 2. Declare a variable and assign a value
let name = "Alice";
console.log("My name is " + name);

// 3. Create a simple function
function greet(person) {
    return "Hello, " + person + "!";
}
console.log(greet("Bob"));

// 4. Use an if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 5. Loop through numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

// 6. Arrays: Store multiple values in a single variable
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// 7. Accessing array elements
console.log(fruits[1]); // banana

// 8. Adding elements to an array
fruits.push("orange");
console.log(fruits);

// 9. Removing elements from an array
fruits.pop();
console.log(fruits);

// 10. Objects: Store data as key-value pairs
let person = { name: "Alice", age: 25 };
console.log(person);

// 11. Accessing object properties
console.log(person.name);

// 12. Modifying object properties
person.age = 26;
console.log(person);

// 13. Functions with default parameters
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5));

// 14. Arrow functions: Shorter function syntax
const add = (x, y) => x + y;
console.log(add(3, 4));

// 15. Template literals: Easier string formatting
let city = "Paris";
console.log(`Welcome to ${city}!`);

// 16. Destructuring arrays
let [first, second] = fruits;
console.log(first, second);

// 17. Destructuring objects
let { name: personName, age: personAge } = person;
console.log(personName, personAge);

// 18. Spread operator: Copy arrays/objects
let moreFruits = [...fruits, "grape"];
console.log(moreFruits);

// 19. Rest parameters: Variable number of arguments
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));

// 20. Map: Transform array elements
let doubled = fruits.map(fruit => fruit + "s");
console.log(doubled);

// 21. Filter: Select array elements
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);

// 22. Reduce: Combine array elements
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log(totalLength);

// 23. Classes: Create custom types
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
let dog = new Animal("Dog");
dog.speak();

// 24. Inheritance: Extend classes
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
let pet = new Dog("Buddy");
pet.speak();

// 25. Promises: Handle asynchronous operations
function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve("Data loaded"), 1000));
}
fetchData().then(data => console.log(data));

// 26. Async/await: Synchronous-looking async code
async function load() {
    let data = await fetchData();
    console.log(data);
}
load();

// 27. Try/catch: Handle errors
try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.log(error.message);
}

// 28. Set: Store unique values
let numbers = new Set([1, 2, 2, 3]);
console.log(numbers);

// 29. Map object: Key-value pairs with any type of key
let capitals = new Map();
capitals.set("France", "Paris");
console.log(capitals.get("France"));

// 30. Date object: Work with dates and times
let now = new Date();
console.log(now);

// 31. JSON: Parse and stringify data
let json = JSON.stringify(person);
console.log(json);
let parsed = JSON.parse(json);
console.log(parsed);
// 32. Local storage: Store data in the browser
// localStorage.setItem("username", "Alice");
// console.log(localStorage.getItem("username"));

// 33. Event listeners: React to user actions (browser only)
// document.addEventListener("click", () => console.log("Clicked!"));

// 34. Modules: Import and export code (ES6+)
// export function hello() { ... }
// import { hello } from './module.js';

// 35. Recursion: Functions that call themselves
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// 36. Closures: Functions with preserved data
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let counter = makeCounter();
console.log(counter());
console.log(counter());

// 37. Currying: Functions returning functions
function multiplyBy(a) {
    return function(b) {
        return a * b;
    };
}
let double = multiplyBy(2);
console.log(double(5));

// 38. Debouncing: Limit function calls (browser only)
// function debounce(fn, delay) { ... }

// 39. Throttling: Limit function rate (browser only)
// function throttle(fn, limit) { ... }

// 40. Generators: Pause and resume functions
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

/*
Explanations:
- console.log() prints messages to the console.
- Variables store data. Use let or const to declare them.
- Functions group code you can reuse.
- if statements let you make decisions in your code.
- for loops repeat code multiple times.
- Arrays store lists of values.
- Objects store data as key-value pairs.
- Arrow functions provide a concise syntax.
- Template literals allow embedded expressions.
- Destructuring extracts values from arrays/objects.
- Spread/rest operators simplify working with arrays/objects.
- Array methods (map, filter, reduce) process data.
- Classes and inheritance enable OOP.
- Promises and async/await handle asynchronous code.
- try/catch handles errors.
- Set and Map store unique values and key-value pairs.
- Date and JSON handle dates and data interchange.
- Local storage saves data in the browser.
- Event listeners respond to user actions.
- Modules organize code.
- Recursion, closures, currying, debouncing, throttling, and generators are advanced concepts for powerful code patterns.
*/