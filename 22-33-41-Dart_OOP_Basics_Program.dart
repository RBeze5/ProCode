// Class definition
class Person {
  // Instance variables
  String name;
  int age;

  // Constructor
  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  // Method
  void sayHello() {
    print('Hello, my name is $name and I am $age years old.');
  }
}

// Main function
void main() {
  // Object instantiation
  var person = Person('John', 25);

  // Method call
  person.sayHello();
}