export default {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      "^.+\\.svg$": "jest-svg-transformer",
      "^.+\\.css$": "identity-obj-proxy"
    },
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
      },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx']
  };