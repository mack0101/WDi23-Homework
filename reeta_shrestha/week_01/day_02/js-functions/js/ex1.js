// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

// Anonymous function

const squareNumber = function( number ) {
  const calcSquareNum = number * number;
  // console.log("The result of squaring the number " + number + " is " + calcSquareNum + ".");
  return calcSquareNum;
}
squareNumber( 4 ) ;


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber( number ) {
  const calcHalfNum = number / 2;
  // console.log ("Half of " + number + " is " + calcHalfNum + ".");
  return calcHalfNum;
}
halfNumber( 4 );


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf( number1, number2 ) {
  const calcPercent = Math.round(number1 / number2 * 100);
  // console.log(number1 + " is " + calcPercent + "% of " + number2 + ".");
  return calcPercent;
}
percentOf( 2, 4 );
percentOf( 676, 1000 );


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle( radius ) {
  const calcArea = parseInt((Math.PI * (radius + radius )).toFixed()); //toFixed function returns a string
  // console.log("The area for a circle with radius " + radius + " is " + calcArea);
  return calcArea;
}
areaOfCircle (2);


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

function grandCalculator( number ) {

  const calcHalfNumber = halfNumber(number);
  const calcSquareNumber = squareNumber(calcHalfNumber);
  const calcAreaofACircle = areaOfCircle(calcSquareNumber);
  const calcPercentage = percentOf(calcAreaofACircle, calcSquareNumber);

  // function binding in one

  const calcFinalNumber = percentOf(areaOfCircle(squareNumber(halfNumber(number))), calcSquareNumber);

  console.log("This is result of long function " + calcPercentage);
  console.log("This is result of short binding " + calcFinalNumber);

}
// Is the result of grandCalculator function mathematically correct?

grandCalculator( 1 ); // returns 800
grandCalculator( 2 ); // returns 600
grandCalculator( 3 ); // returns 622
grandCalculator( 4 ); // returns 625


// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
  //
  // DrEvil(10): 10 dollars
  // DrEvil(1000000): 1000000 dollars (pinky)

function drEvil ( amount ) {
  if ( amount === 1000000 ) {
    console.log(amount + " dollars (pinky)");
  } else {
    console.log(amount + " dollars");
  }
}
drEvil(2);
drEvil(1000000);


// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
  //
  // mixUp('mix', 'pod'): 'pox mid'
  // mixUp('dog', 'dinner'): 'dig donner'

function mixUp (string1, string2) {
  const firstString = string1.replace(string1[1], string2[1]);
  const secondString = string2.replace(string2[1], string1[1]);
  console.log( firstString + " " + secondString );

}
mixUp("mix", "pod");
mixUp("sun", "dance");
mixUp('dog', 'dinner');


// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

 function fixStart (str) {
   return str[0].concat(str.split('').slice(1).map((char)=> {return char == str[0] ? '*' : char }).join(''));
 }
 console.log(fixStart("babble"));
 console.log(fixStart("retarrr"));
