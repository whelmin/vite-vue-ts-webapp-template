module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'prettier/prettier': true,
    'declaration-empty-line-before': 'never',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested', 'inside-block'],
      },
    ],
  },
};
