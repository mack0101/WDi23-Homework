
var squareNumber = function(num) {
  var squared = num * num;
  console.log("The result of squaring the number " + num + " is " + squared + '.');
  return squared;
}
squareNumber(8);

var halfNumber = function(num) {
  var divide = num / 2;
  console.log("Half of " + num + " is " + divide + '.');
  return divide;
}
halfNumber(25);

var percentOf = function(a, b) {
  //Two conditionals to check which number is bigger,
  //the former or the latter.
  if (a > b) {
    var former = b / a * 100;
    console.log(b + ' is ' + former + '% of ' + a) + '.';
    return former + "%";
  } else {
    var latter = a / b * 100;
    console.log(a + ' is ' + latter + '% of ' + b + '.');
    return latter + "%";
  }
}
percentOf(30, 10);



var areaOfCircle = function(radius) {
  var area = Math.PI * radius * radius;
  console.log("The area for a circle with radius " + radius + " is " + Math.round(area) + '.');
  return Math.round(area);
}
areaOfCircle(10);


var partTwo = function(num) {
  var firstResult = num / 2;
  var secondResult = firstResult * firstResult;
  var thirdResult = Math.PI * secondResult * secondResult;
  var fourthResult = (secondResult / thirdResult) * 100
  return fourthResult + "%";
}
partTwo(5);
