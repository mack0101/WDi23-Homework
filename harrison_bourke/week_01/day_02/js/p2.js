let DrEvil = function(amount)
{
  if (amount === 1000000)
  {
    return amount + " dollars (pinky)";
  }
  return amount + "dollars";
}

let mixUp = function(string1, string2)
{
  let startString1 = string1.substring(0, 2);
  let startString2 = string2.substring(0, 2);

  let endString1 = string1.substring(2, string1.length);
  let endString2 = string2.substring(2, string2.length);

  return startString1 + endString2 + " " + startString2 + endString1;
}


let fixStart = function(string)
{
  let finalString = "";

  for (let i = 0; i < string.length; i++)
  {
    if (string[i] == string[0] && i != 0)
    {
      finalString += "*";
    }
    else
    {
      finalString += string[i];
    }

  }
  return finalString;
}


let verbing = function(string)
{
  let finalString = "";

  if (string.length >= 3)
  {
    if (string.substring(string.length - 3, string.length) == "ing")
    {
      finalString = string + "ly"
    }
    else
    {
      finalString = string + "ing";
    }
  }
  else
  {
    finalString = string;
  }
  return finalString
}

let notBad = function(inputString)
{
  let notFound = false;
  let startSubStr;
  let endSubStr = null;

  let returnString = "";

  for (let i = 0; i < inputString.length; i++)
  {
    if (inputString.substring(i, i + 3) == "not" && !notFound)
    {
      notFound = true;
      startSubStr = i + 1;
    }

    if (inputString.substring(i, i + 3) == "bad" && notFound)
    {
      endSubStr = i + 2;
    }
  }

  if (endSubStr != null)
  {
    returnString = inputString.substring(0, startSubStr - 1);
    returnString += "good";

    if (endSubStr + 1 < inputString.length)
    {
      returnString += inputString.substring(endSubStr + 1, inputString.length);
    }
  }
  else
  {
    returnString = inputString;
  }

  return returnString;
}

console.log(notBad("This dinner is not that bad!"));
console.log(notBad("This movie is not so bad!"));
console.log(notBad("This dinner is bad"));
