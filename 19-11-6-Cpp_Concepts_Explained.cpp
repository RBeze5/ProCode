#include <iostream>

// Function declaration
int factorial(int n);

int main() {
    // Variables
    int number;

    // User input
    std::cout << "Enter a number: ";
    std::cin >> number;

    // Conditional statement
    if (number >= 0) {
        // Loop
        int result = factorial(number);

        // Output
        std::cout << "The factorial of " << number << " is " << result << std::endl;
    } else {
        // Output
        std::cout << "Cannot calculate factorial for negative numbers." << std::endl;
    }

    // Return statement
    return 0;
}

// Function definition
int factorial(int n) {
    // Base case
    if (n == 0 || n == 1) {
        return 1;
    }

    // Recursive call
    return n * factorial(n - 1);
}