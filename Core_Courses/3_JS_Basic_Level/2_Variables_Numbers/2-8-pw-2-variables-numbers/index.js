// первая задача
function getRectangularArea(x1, y1, x2, y2) {
  let rectangularArea = Math.abs(x1 - x2) * Math.abs(y1 - y2);
  return console.log(rectangularArea);
}

getRectangularArea(2, 3, 10, 5); // 16
getRectangularArea(10, 5, 2, 3); // 16
getRectangularArea(-5, 8, 10, 5); // 45
getRectangularArea(5, 8, 5, 5); // 0
getRectangularArea(8, 1, 5, 1); // 0
