/* eslint-env node */
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    require.resolve('@try-svelte/eslint-prettier-config/.eslintrc.js')
  ],
  plugins: [
    'svelte3',
  ],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    }
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
    'svelte3/ignore-styles': () => true,
  },
}
