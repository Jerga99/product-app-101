
alert("Assignment 5");

// 1. Create a class called "Square"
//    - Create a constructor with 1 parameter which will
//    - represent length of side of the square
//    - create a member function(method) called "computeArea"
//      that will compute the area of the square,
//      return the area of the square from this method


// 2. Create a class called "Rectangle" that will extend the square
//    - Create a constructor with 2 parameters which will
//      represent length of sides of the rectangle
//    - Create a member function called "computeArea"
//      that will compute area of the rectangle,
//      return the area of rectangle from the function

// 3. create a instance of Square
// 4. create a instance of Rectangle

// 5. compute area for both and verify if the results are correct.

// -- After eveything works --

// 6. think of the "best" way how to improve your code with inheritance
//    with as much reusability as possible and not much repetition

// Tip: Code first working solution and then think how to improve it.

// CODE UNDER THIS LINE
// ----------------------------




const square = new Square(10);
const rectangle = new Rectangle(10, 5);

const squareArea = square.computeArea();
const rectangleArea = rectangle.computeArea();

console.log("Area of square is: ", squareArea);
console.log("Area of rectangle is: ", rectangleArea);
