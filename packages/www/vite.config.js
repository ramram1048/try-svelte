import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: sveltePreprocess()
  })],
  cacheDir: ".yarn/.vite",
})
