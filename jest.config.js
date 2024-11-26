export default {
    testEnvironment: 'jest-environment-jsdom', // Use jsdom for the test environment
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform JSX and JS with Babel
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy', // Mock CSS imports in Jest tests
    },
    setupFilesAfterEnv: [
      '@testing-library/jest-dom', // Extend Jest with additional DOM matchers
    ],
  };
  