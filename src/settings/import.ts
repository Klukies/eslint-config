export const importSettings = (tsconfigRootDir: string) => ({
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
  },
  'import/resolver': {
    typescript: {
      alwaysTryTypes: true,
      project: `${tsconfigRootDir}/tsconfig.json`,
    },
  },
});
