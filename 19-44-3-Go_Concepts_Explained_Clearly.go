package main

import (
	"fmt"
	"math"
)

// Struct representing a 2D point
type Point struct {
	X float64
	Y float64
}

// Method to calculate the distance between two points
func (p Point) DistanceTo(q Point) float64 {
	dx := q.X - p.X
	dy := q.Y - p.Y
	return math.Sqrt(dx*dx + dy*dy)
}

// Interface representing a shape
type Shape interface {
	Area() float64
	Perimeter() float64
}

// Struct representing a rectangle
type Rectangle struct {
	Width  float64
	Height float64
}

// Method to calculate the area of a rectangle
func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}

// Method to calculate the perimeter of a rectangle
func (r Rectangle) Perimeter() float64 {
	return 2*r.Width + 2*r.Height
}

// Main function
func main() {
	p1 := Point{X: 0, Y: 0}
	p2 := Point{X: 3, Y: 4}
	distance := p1.DistanceTo(p2)
	fmt.Printf("Distance between p1 and p2: %.2f\n", distance)

	r := Rectangle{Width: 5, Height: 3}
	area := r.Area()
	perimeter := r.Perimeter()
	fmt.Printf("Rectangle area: %.2f\n", area)
	fmt.Printf("Rectangle perimeter: %.2f\n", perimeter)
}