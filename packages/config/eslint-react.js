module.exports = {
  extends: ["next", "prettier"],
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


