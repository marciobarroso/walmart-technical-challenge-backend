module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.spec.+(js|ts|tsx)'],
  coveragePathIgnorePatterns: [
    "/tests/"
  ]
};