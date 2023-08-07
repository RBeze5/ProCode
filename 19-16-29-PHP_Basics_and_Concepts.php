<?php

// Variables and Data Types
$name = "John";
$age = 25;
$height = 1.75;
$isStudent = true;

// Conditional Statements
if ($age >= 18) {
    echo "$name is an adult.";
} else {
    echo "$name is a minor.";
}

// Loops
echo "\nCountdown:\n";
for ($i = 10; $i >= 0; $i--) {
    echo "$i... ";
}
echo "\n";

// Arrays
$fruits = array("apple", "banana", "orange");
echo "Fruits: ";
foreach ($fruits as $fruit) {
    echo $fruit . " ";
}
echo "\n";

// Functions
function calculateSum($a, $b) {
    return $a + $b;
}

$result = calculateSum(2, 3);
echo "Result: $result\n";

// Classes and Objects
class Car {
    public $brand;
    public $color;

    public function __construct($brand, $color) {
        $this->brand = $brand;
        $this->color = $color;
    }

    public function drive() {
        echo "Driving a $this->color $this->brand.\n";
    }
}

$car = new Car("Toyota", "blue");
$car->drive();

?>