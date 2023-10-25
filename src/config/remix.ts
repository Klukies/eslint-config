// Change the cjs imports to esm
import { coreRules, importRules, typescriptRules } from '../rules';
import { importSettings, reactSettings } from '../settings';

/** @type {import('eslint').Linter.Config} */
export const remixConfig = (tsconfigRootDir = '.') => ({
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['/node_modules', '/build', '/public/build'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['import', 'prettier'],
  rules: {
    ...coreRules,
    ...importRules,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2022,
        project: true,
        sourceType: 'module',
        tsconfigRootDir,
      },
      plugins: ['import', '@typescript-eslint', 'prettier'],
      rules: {
        ...coreRules,
        ...importRules,
        ...typescriptRules,
      },
      settings: {
        ...importSettings(tsconfigRootDir),
        ...reactSettings,
      },
    },
  ],
});
