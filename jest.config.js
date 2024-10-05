module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/**/*.spec.{js,jsx,ts,tsx}',
    '!src/**/styles.ts',
  ],
};