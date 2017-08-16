// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const sumArray = function(Array){
  let sum = 0;
  for (let i = 0; i < Array.length; i++) {
    sum = sum + Array[i];
  }
  return sum;
}

console.log(sumArray([1,5,7,8]));

const multiplyArray = function(Array){
    let total = 1;
    for (let i = 0; i < Array.length; i++){
      total *= Array[i];
    }
    return total;
  }

console.log(multiplyArray([5,10]));
