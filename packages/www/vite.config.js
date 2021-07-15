import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { asMarkupPreprocessor } from 'svelte-as-markup-preprocessor'
import { typescript, scss } from 'svelte-preprocess'
import cssModules from 'svelte-preprocess-cssmodules'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
      asMarkupPreprocessor([
        typescript(),
        scss({
          implementation: sass,
        }),
      ]),
      cssModules(),
    ],
  })],
  cacheDir: ".yarn/.vite",
})
