#include <stdio.h>

// Function declaration
int factorial(int n);

int main() {
    // Variables declaration and initialization
    int num = 5;
    int result;

    // Function call
    result = factorial(num);

    // Output the result
    printf("The factorial of %d is %d\n", num, result);

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