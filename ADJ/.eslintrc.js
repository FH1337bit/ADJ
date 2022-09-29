// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));

module.exports = {
    extends: ["prettier", "plugin:@typescript-eslint/recommended", "plugin:@next/next/recommended"],
    plugins: ["prettier", "@typescript-eslint", "unused-imports"],
    rules: {
        "prettier/prettier": ["warn", prettierOptions],
        "@typescript-eslint/no-explicit-any": "off",
        "react-hooks/exhaustive-deps": "off",
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "warn",
        "unused-imports/no-unused-vars": [
            "warn",
            { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
        ],
    },
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            rules: { "prettier/prettier": ["warn", prettierOptions] },
        },
    ],
    settings: {
        react: {
            version: "18.1.0",
        },
    },
};
