import { isNumeric, isEmpty } from '../../../src/util/Validation'

it('should return true when try to validate string 123', () => {
  const value = '123'
  const result = isNumeric(value)
  expect(result).toBe(true)
})

it('should return false when try to validate string 1w3', () => {
  const value = '1w3'
  const result = isNumeric(value)
  expect(result).toBe(false)
})

it('should return true when test a empty string object', () => {
  const value = ''
  const result = isEmpty(value)
  expect(result).toBeTruthy()
})

it('should return false when test a not empty string object', () => {
  const value = 'wer'
  const result = isEmpty(value)
  expect(result).toBeFalsy()
})