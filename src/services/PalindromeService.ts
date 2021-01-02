import { isEmpty } from '../util/Validation';

export const check = (expression: string): boolean => {
  if(expression === undefined||isEmpty(expression)||expression.length <3) return false
  const regex = /[\W_]/g; // regex to remove unwanted characters
  const lowercaseExpression = expression.toLowerCase().normalize("NFD").replace(regex, ''); // lower case, normalize to remove accents and apply regex
  const reverseExpression = lowercaseExpression.split('').reverse().join('');  // reverse the result world
  return reverseExpression === lowercaseExpression; // compare the result world with the original after apply our regex
}

