rad = [2, 4, 7, 3, 3, 5, 6];
let circleDiameter = function (rad) {
  return 2 * r;
};
let circleArea = function (rad) {
  return Math.PI * r * r;
};
let Circumference = function (rad) {
  return 2 * Math.PI * r;
};

function calculations(rad, formula) {
  result = [];
  for (r of rad) {
    result.push(formula(rad[r]));
  }
  return result;
}
console.log(calculations(rad, circleDiameter));
console.log(calculations(rad, circleArea));
console.log(calculations(rad, Circumference));
