export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!(@babel/runtime|axios))"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
