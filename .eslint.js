module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
      "prettier",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:jest/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
    ],
    env: {
      browser: true,
      amd: true,
      node: true,
      "jest/globals": true,
    },
}
