export const check = (expression: string): boolean => {
  const regex = /[\W_]/g; // regex to remove unwanted characters
  const lowercaseExpression = expression.toLowerCase().normalize("NFD").replace(regex, ''); // lower case, normalize to remove accents and apply regex
  const reverseExpression = lowercaseExpression.split('').reverse().join('');  // reverse the result world
  return reverseExpression === lowercaseExpression; // compare the result world with the original after apply our regex
}

