module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-full-stop': [0, 'always', ''],
    'body-leading-blank': [2, 'always', true],
    'body-empty': [1, 'never', false],
    'body-case': [1, 'always', ['lower-case', 'sentence-case']],
    'footer-leading-blank': [2, 'always', true],
    'footer-empty': [0, 'never', false],
    'header-case': [2, 'always', 'lower-case'],
    'header-full-stop': [0, 'always', ''],
    'header-max-length': [2, 'always', 72],
    'header-min-length': [1, 'always', 16],
    'scope-enum': [
      2,
      'always',
      // Edit scopes in .github/workflows/lint-pr.yml
      ['components', 'pages', 'layouts', 'linter', 'nuxt', 'npm', 'gh-actions'],
    ],
    'scope-case': [2, 'always', 'kebab-case'],
    'scope-empty': [2, 'never', true],
    'subject-case': [1, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      // Edit types in .github/workflows/lint-pr.yml
      ['fix', 'feat', 'refactor', 'perf', 'build', 'ci'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never', false],
  },
}
