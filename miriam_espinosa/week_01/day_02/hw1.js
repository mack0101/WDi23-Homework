/*
Part 1

-Write a function called squareNumber that will take one argument (a number),
square that number, and return the result. It should also log a string like
"The result of squaring the number 3 is 9."

-Write a function called halfNumber that will take one argument (a number), divide it by 2,
and return the result. It should also log a string like "Half of 5 is 2.5.".

-Write a function called percentOf that will take two numbers,
figure out what percent the first number represents of the second number,
and return the result. It should also log a string like "2 is 50% of 4."

-Write a function called areaOfCircle that will take one argument (the radius),
calculate the area based on that, and return the result. It should also log a string like
"The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.

-Write a function that will take one argument (a number) and perform the following operations,
using the functions you wrote earlier1:

-Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/

const squareNumber = function (number) {
  const square = number * number;
  const message = "The result of squaring the number " + number + " is " + square;
  console.log(message);
}
squareNumber (6);

const halfNumber = function (num1) {
  const divide = num1 / 2;
    const message = "Half of " + num1 + " is " + divide;
    console.log(message);
}
halfNumber(170);

const percentOf = function (numero1, numero2) {
  const percent = numero1 / numero2 * 100;
  const message = numero1 + " is " + percent + "% of " + numero2;
  console.log(message);
}
percentOf(2,4);

const areaOfCircle = function (radius) {
  const area = Math.PI * radius * radius;
  const result = Math.round(area*100)/100;
  const message = "The area for a circle with radius " + radius + " is " + result;
  console.log(message);
}
areaOfCircle(2);

const part2 = function (num) {
  const result1 = num / 2;
  console.log (result1);

  const result2 = result1 * result1;
  console.log(result2);

  const result3 = Math.PI * result2 * result2;
  console.log(result3);

  const result4 = result3 / (result3 * 100);
  console.log((result2 *100) / result3);
}

part2(6);
