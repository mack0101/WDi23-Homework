// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const truthyOrFalsey = function(char){
  var i = char.toLowerCase();
  if (char === 'a' || 'e' || 'i' || 'o' || 'u'){
    return true;
  } else {
    return false;
  }
}
console.log(truthyOrFalsey('A'));
