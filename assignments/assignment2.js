
alert("Assignment2 has been loaded!");

// 1. Create a function that returns the object of "rectangle"
// 2. this function will have 3 parameters "name", "a", "b"
//          -> "name"
//          -> "a" and "b" are lengths of rectangle sides
// 3. create 2 rectangles of custom size by calling the function you have created
// 4. create a new function that will accept a rectangle as parameter and then do following:
//   1. compute area of the rectangle
//   2. compute circumference of the rectangle
//   3. console.log out text "Area of rectangle <you rectangle name> is <15>"
//   4. console.log out text "Circumference of rectangle <you rectangle name> is <15>"
//   -- replace < > with your values of rectangle

// implement your assignment under this line
// ----------------------------------------



const rectangle1 = createRectangle("First rectangle", 10, 5);
const rectangle2 = createRectangle("Second rectangle", 3, 5);

getRectangleInfo(rectangle1);
// "Area of rectangle First rectangle is 50"
// "Circumference of rectangle First rectangle is 30"
getRectangleInfo(rectangle2);
// "Area of rectangle Second rectangle is 15"
// "Circumference of rectangle Second rectangle is 16"
