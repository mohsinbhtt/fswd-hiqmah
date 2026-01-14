const rad = [2, 4, 7, 3, 3, 5, 6];

calDiameter = function (rad) {
  let Diameter = [];
  for (r of rad) {
    let d = 2 * r;
    Diameter.push(d);
  }
  return Diameter;
};
console.log(calDiameter(rad));

calCircumference = function (rad) {
  let Circumference = [];
  for (r of rad) {
    let d = 2 * 3.14 * r;
    Circumference.push(d);
  }
  return Circumference;
};
console.log(calCircumference(rad));

calCicleArea = function (rad) {
  let Area = [];
  for (r of rad) {
    let d = 3.14 * r * r;
    Area.push(d);
  }
  return Area;
};
console.log(calCicleArea(rad));
