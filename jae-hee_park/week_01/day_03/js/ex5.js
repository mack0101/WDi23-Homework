// Bonus
//
// Define a function reverseString that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string){
  let newString = '';
  for (let i = string.length-1; i >= 0; i--){
    newString += string[i];
  }
  return newString;
}

console.log(reverseString('hello world'));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function(arrayOfWords){
  let length = 0;
  for (let i = 0; i < arrayOfWords.length; i++){
    if (arrayOfWords[i].length > length) {
      length = arrayOfWords[i].length;
    }
    }
    return length;
  }

console.log(findLongestWord(['hello', 'goodbye', 'hi']));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
const filterLongWords = function (array, number){
  let newArr = [];
  for (let i = 0; i < array.length; i++){
    if (array[i].length > number) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

console.log(filterLongWords(['hello', 'goodbye', 'hi'],3));
