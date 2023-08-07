# Concept 1: Variables and Data Types
name = "John"  # string variable
age = 25  # integer variable
height = 1.75  # float variable
is_student = True  # boolean variable

# Concept 2: Conditional Statements
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")

# Concept 3: Loops
for i in range(5):
    print(i)

# Concept 4: Functions
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")

# Concept 5: Lists
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
print(fruits[2])

# Concept 6: Dictionaries
person = {"name": "John", "age": 25, "occupation": "engineer"}
print(person["occupation"])

# Concept 7: Classes and Objects
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} is barking!")

my_dog = Dog("Buddy")
my_dog.bark()