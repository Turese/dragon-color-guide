// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      "sort-keys": [
        "error",
        "asc",
        { caseSensitive: false, natural: false, minKeys: 2 },
      ],
    },
  },
  eslintPluginPrettierRecommended,
);
