

console.log("Starting our app");

function computeRectangleArea(a, b) {
  const area = a * b;

  return area;
}

const rectangleArea = computeRectangleArea(10, 5);
console.log(rectangleArea)

computeRectangleArea(100, 7);

const x = 50;
const y = 3;

computeRectangleArea(x, y);
computeRectangleArea(x, 45);
computeRectangleArea(true, false);
computeRectangleArea("fili", "kili");


console.log("Finishing our app");
