module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each'
  ]
};