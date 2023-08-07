import java.util.ArrayList; // Importing the ArrayList class from the java.util package

// Defining a class named "Concepts"
public class Concepts {
  
    // Defining a constant variable
    private static final int MAX_COUNT = 10;
  
    // Defining the main method, which is the entry point of the program
    public static void main(String[] args) {
      
        // Variables and data types
        int number = 42;
        double pi = 3.14;
        boolean isTrue = true;
        char letter = 'A';
        String name = "John Doe";
      
        // Control flow statements
        if (number > 0) {
            System.out.println("The number is positive.");
        } else if (number < 0) {
            System.out.println("The number is negative.");
        } else {
            System.out.println("The number is zero.");
        }
      
        // Loops
        for (int i = 0; i < MAX_COUNT; i++) {
            System.out.println("Count: " + i);
        }
      
        int[] numbers = {1, 2, 3, 4, 5}; // Array
        for (int num : numbers) {
            System.out.println("Number: " + num);
        }
      
        // Classes and objects
        Person person1 = new Person("Alice", 25);
        Person person2 = new Person("Bob", 30);
        System.out.println(person1.getName() + " is " + person1.getAge() + " years old.");
        System.out.println(person2.getName() + " is " + person2.getAge() + " years old.");
      
        // ArrayList
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        System.out.println("Fruits: " + fruits);
      
        // Exception handling
        try {
            int result = 10 / 0; // This will throw an ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
      
        // Method invocation
        int sum = addNumbers(5, 7);
        System.out.println("Sum: " + sum);
    }
  
    // Method definition
    public static int addNumbers(int a, int b) {
        return a + b;
    }
}

// Person class definition
class Person {
    private String name;
    private int age;
  
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
  
    public String getName() {
        return name;
    }
  
    public int getAge() {
        return age;
    }
}