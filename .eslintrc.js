module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends:[ 'airbnb-base',"prettier" ]
  parserOptions: {
    ecmaVersion: 14,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'linebreak-style': 0,
    'no-use-before-define': 'off',
    'max-classes-per-file': 'off',
    'no-param-reassign': 'off',
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
  },
};
