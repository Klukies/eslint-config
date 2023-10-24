export const importRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
  'import/order': [
    'error',
    {
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
};
