export const check = (expression: string): Boolean => {
  var regex = /[\W_]/g; // regex to remove unwanted characters
  var lowercaseExpression = expression.toLowerCase().normalize("NFD").replace(regex, ''); // lower case, normalize to remove accents and apply regex
  var reverseExpression = lowercaseExpression.split('').reverse().join('');  // reverse the result world
  return reverseExpression === lowercaseExpression; // compare the result world with the original after apply our regex
}

