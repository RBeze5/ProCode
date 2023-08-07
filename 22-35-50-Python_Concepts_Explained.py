# Function to calculate the factorial of a number
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

# Main program
if __name__ == "__main__":
    # User input
    num = int(input("Enter a number: "))

    # Conditional statement
    if num < 0:
        print("Factorial undefined for negative numbers.")
    else:
        # Looping construct
        for i in range(num+1):
            print(f"Factorial of {i} is {factorial(i)}")

        # List
        factors = []
        for i in range(1, num+1):
            if num % i == 0:
                factors.append(i)
        print(f"Factors of {num}: {factors}")

        # String manipulation
        reverse = str(num)[::-1]
        print(f"Reverse of {num}: {reverse}")