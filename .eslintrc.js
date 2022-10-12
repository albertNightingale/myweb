module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "google",
        "prettier",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "valid-jsdoc": ["off"],
        "require-jsdoc": ["off"],
        "no-empty-function": ["warn"],
        "@typescript-eslint/no-empty-function": ["warn"],
    },
};
