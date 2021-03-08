module.exports = {
    testEnvironment: "node",
    modulePaths: ["<rootDir>/src"],
    watchPlugins: [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname",
    ],
    setupFilesAfterEnv: ["<rootDir>/src/setupAfterEnv.js"],
  };
  