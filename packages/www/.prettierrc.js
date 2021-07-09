module.exports = {
  ...require('@try-svelte/eslint-prettier-config/.prettierrc.js'),
  plugins: ['prettier-plugin-svelte'],
  svelteSortOrder: 'options-styles-scripts-markup',
  svelteStrictMode: true,
  svelteBracketNewLine: true,
  svelteIndentScriptAndStyle: true,
}
