using System;

namespace ConceptsProgram
{
    class Program
    {
        // Entry point of the program
        static void Main(string[] args)
        {
            // Variables and data types
            int number = 10;
            string name = "John";
            bool isTrue = true;
            double decimalNumber = 3.14;

            Console.WriteLine($"Number: {number}");
            Console.WriteLine($"Name: {name}");
            Console.WriteLine($"Is True: {isTrue}");
            Console.WriteLine($"Decimal Number: {decimalNumber}");

            // Conditional statements
            if (number > 5)
            {
                Console.WriteLine("Number is greater than 5.");
            }
            else
            {
                Console.WriteLine("Number is not greater than 5.");
            }

            // Loops
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine($"Loop iteration: {i}");
            }

            // Arrays
            int[] numbers = { 1, 2, 3, 4, 5 };
            Console.WriteLine("Numbers in the array:");
            foreach (int num in numbers)
            {
                Console.WriteLine(num);
            }

            // Methods
            int sum = AddNumbers(3, 4);
            Console.WriteLine($"Sum: {sum}");

            // Classes and objects
            Person person = new Person("Alice", 25);
            person.PrintDetails();
        }

        // Method that adds two numbers and returns the sum
        static int AddNumbers(int a, int b)
        {
            return a + b;
        }

        // Class definition
        class Person
        {
            // Class properties
            public string Name { get; set; }
            public int Age { get; set; }

            // Constructor
            public Person(string name, int age)
            {
                Name = name;
                Age = age;
            }

            // Method
            public void PrintDetails()
            {
                Console.WriteLine($"Name: {Name}, Age: {Age}");
            }
        }
    }
}