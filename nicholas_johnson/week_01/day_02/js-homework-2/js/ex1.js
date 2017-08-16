var drEvil = function(amount) {
  if (amount === 1000000) {
    return amount + " dollars (pinky)"
  } else {
    return amount + " dollars"
  }
}
drEvil(1000000);

var mixUp = function(str1, str2) {
  var first = str1.substring(0,2);
  var second = str2.substring(0,2);

  var last1 = str1.substring(2, str1.length - 1);
  var last2 = str2.substring(2, str2.length - 1);
  return first + last2 + ' ' + second + str1;
}
mixUp("mix", "pod");



var fixStart = function('string') {
  var firstLetter = 'string'[0];
  for (var i = 0; i < 'string'.length; i++) {
    if (string[i] === firstLetter) {
      'string'.replace("*");
    }
  }
}
fixStart("babble");


var verbing = function('str')
