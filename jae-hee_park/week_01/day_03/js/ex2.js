// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (num1, num2, num3){
  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  if (num2 > num1 && num2 > num3) {
    return num2;
  }
  if (num3 > num1 && num3 > num2) {
    return num3;
  }
}
console.log(maxOfThree(20, 10, 1));
