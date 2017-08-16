let maxOfTwoNumbers = function(num1, num2)
{
  return num1 > num2 ? num1 : num2;
}

console.log(`maxOfTwoNumbers function: ${(5, 7)}`);

let maxOfThree = function(num1, num2, num3)
{
  if (num1 > num2)
  {
    if (num1 > num3)
    {
      return num1;
    }
    else
    {
      return num3;
    }
  }
  else
  {
    if (num2 > num3)
    {
      return num2;
    }
    else
    {
      return num3;
    }
  }
}

console.log(`maxOfThree function: ${maxOfThree(5, 24, 19)}`);

let checkForVowel = function(char)
{
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
  {
    return true;
  }

  return false;
}

console.log(`checkForVowel function: ${checkForVowel("e")}`);


let sumArray = function(arr)
{
  let sum = 0;

  for (i = 0; i < arr.length; i++)
  {
    sum += arr[i];
  }

  return sum;
}

let numArr = [1, 2, 3, 4, 5];
console.log(`sumArray function: ${sumArray(numArr)}`);

let multiplyArray = function(arr)
{
  let sum = 0;

  for (i = 0; i < arr.length; i++)
  {
    sum *= arr[i];
  }

  return sum;
}

console.log(`multiplyArray function: ${multiplyArray(numArr)}`);

let reverseString = function(str)
{
  let finalStr = "";

  for (i = str.length - 1; i >= 0; i--)
  {
    finalStr += str[i];
  }

  return finalStr;
}

console.log(`reverseString function: ${reverseString("hello")}`);

let findLongestWord = function(arr)
{
  let longestString = arr[0];

  for (i = 0; i < arr.length; i++)
  {
    if (arr[i].length > longestString.length)
    {
      longestString = arr[i];
    }
  }

  return longestString;
}

let arr = ["hello", "yes", "goodbye", "ola"];
console.log(`findLongestWord function: ${findLongestWord(arr)}`);


let filterLongWords = function(arr, n)
{
  newArr = [];

  for (i = 0; i < arr.length; i++)
  {
    if (arr[i].length > n)
    {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(`filterLongWords function: ${filterLongWords(arr, 4)}`);
