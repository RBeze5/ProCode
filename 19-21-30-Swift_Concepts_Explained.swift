// Variables and Constants
var myVariable = 10 // Variable declaration
let myConstant = 20 // Constant declaration

// Data Types and Type Inference
var myString: String = "Hello, World!" // String data type
var myNumber: Int = 42 // Integer data type
var myDecimal: Double = 3.14 // Double-precision floating-point data type
var myBool: Bool = true // Boolean data type

// Optionals and Nil Coalescing Operator
var optionalValue: Int? = nil // Optional declaration
var unwrappedValue = optionalValue ?? 0 // Nil coalescing operator

// Control Flow and Conditionals
if myNumber < 50 {
    print("Number is less than 50")
} else {
    print("Number is greater than or equal to 50")
}

for i in 1...5 {
    print(i)
}

// Functions
func greet(name: String) {
    print("Hello, \(name)!")
}

greet(name: "John")

// Arrays
var myArray = [1, 2, 3, 4, 5] // Array declaration
myArray.append(6) // Add element to the end
myArray.remove(at: 2) // Remove element at index 2

// Dictionaries
var myDict = ["name": "John", "age": 30] // Dictionary declaration
myDict["city"] = "New York" // Add a key-value pair
myDict.removeValue(forKey: "age") // Remove a key-value pair

// Classes and Objects
class Person {
    var name: String
    var age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    func introduce() {
        print("My name is \(name) and I'm \(age) years old.")
    }
}

let person = Person(name: "Alice", age: 25)
person.introduce()

// Structs
struct Point {
    var x: Int
    var y: Int

    mutating func moveX(by amount: Int) {
        x += amount
    }
}

var point = Point(x: 5, y: 10)
point.moveX(by: 3)
print(point.x)

// Optionals and Optional Binding
var optionalName: String? = "Bob"

if let name = optionalName {
    print("Hello, \(name)!")
} else {
    print("Hello, stranger!")
}