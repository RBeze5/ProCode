// Groovy program to demonstrate various concepts

// Variables and data types
def name = "John"
def age = 25
def pi = 3.14159
def isStudent = true

// Printing variables and string interpolation
println "Name: $name"
println "Age: $age"
println "PI: $pi"
println "Is student: $isStudent"

// Conditionals
if (age >= 18) {
    println "You are an adult."
} else {
    println "You are a minor."
}

// Looping
println "Counting from 1 to 5:"
for (i in 1..5) {
    println i
}

// Collections
def fruits = ["apple", "banana", "orange"]
println "Fruits: $fruits"
println "First fruit: ${fruits[0]}"

// Functions
def greet(name) {
    println "Hello, $name!"
}

greet("Alice")

// Classes and objects
class Person {
    String name
    int age

    void introduce() {
        println "Hi, my name is $name and I am $age years old."
    }
}

def person = new Person(name: "Bob", age: 30)
person.introduce()