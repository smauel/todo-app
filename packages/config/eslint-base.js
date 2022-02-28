module.exports = {
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  plugins: ["prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "prettier/prettier": "error"
  },
};

