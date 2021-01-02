export const isNumeric = (value: string): boolean => {
  return value !== undefined && /^-?[\d.]+(?:e-?\d+)?$/.test(value)
}

export const isEmpty = (value: string): boolean => {
  return value !== undefined && value === ''
}