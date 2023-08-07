// Variable declaration and assignment
let name = "John";
const age = 25;
var city = "New York";

// Function definition and invocation
function greet() {
  console.log("Hello, " + name + "!");
}

greet();

// Conditional statement
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Looping statement
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}

// Array declaration and manipulation
const fruits = ["apple", "banana", "orange"];
console.log("First fruit: " + fruits[0]);
fruits.push("grape");
console.log("Total fruits: " + fruits.length);

// Object declaration and manipulation
const person = {
  name: "Alice",
  age: 30,
  city: "London",
};

console.log(person.name + " is " + person.age + " years old.");

// Error handling
try {
  const result = 10 / 0;
  console.log("Result: " + result);
} catch (error) {
  console.log("An error occurred: " + error.message);
}

// Asynchronous programming
setTimeout(function () {
  console.log("This message is delayed by 2 seconds.");
}, 2000);