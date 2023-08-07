// Declaring a variable with type annotation
let message: string = "Hello, TypeScript!";

// Defining a function with type annotations for parameters and return value
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function invocation
console.log(greet("Alice"));

// Defining a class with properties and methods
class Person {
  private name: string; // Private property

  constructor(name: string) {
    this.name = name;
  }

  // Method with type annotation for parameter and return value
  greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Creating an instance of the class
const person = new Person("Bob");
person.greet();

// Using interfaces to define object shapes
interface Shape {
  name: string;
  area(): number;
}

// Implementing an interface in a class
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

// Creating an instance of the class implementing the interface
const rectangle = new Rectangle(5, 3);
console.log(rectangle.area());

// Using type aliases to define custom types
type Point = {
  x: number;
  y: number;
};

// Function with type annotation for parameter
function distance(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Using union types
type Result = string | number;

// Function that returns a string or a number based on input
function processValue(value: number): Result {
  if (value < 0) {
    return "Error";
  } else {
    return Math.sqrt(value);
  }
}

console.log(distance({ x: 0, y: 0 }, { x: 3, y: 4 }));
console.log(processValue(16));