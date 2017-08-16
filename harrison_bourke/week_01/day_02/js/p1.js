let squareNumber = function(input)
{
  return input * input;
}

let halfNumber = function(input)
{
  return input / 2;
}

let percentOf = function(num1, num2)
{
  let percent = (num1 / num2) * 100
  return percent;
}

let areaOfCircle = function(radius)
{
    let area = Math.pow(radius, 2) * Math.PI;
    return area;
}

let randFunction = function(input)
{
  let halfNum = halfNumber(input);
  let squareNum = squareNumber(halfNum);
  let area = areaOfCircle(squareNum);
  let percent = percentOf(area, squareNum);

  return percent;
}

console.log(areaOfCircle(2));
