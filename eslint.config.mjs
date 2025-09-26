// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["src/constants/"],
    rules: {
      "sort-keys": [
        "error",
        "asc",
        { caseSensitive: false, minKeys: 2, natural: false },
      ],
    },
  },
  {
    files: ["src/*"],
    rules: {
      // allow unused vars that start with _
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
);
