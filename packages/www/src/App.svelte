<style lang="scss" module>
  @import 'themes/colors';

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .main {
    margin: 0 auto;
    padding: 1em;
    text-align: center;
  }

  .logo {
    width: 16rem;
    height: 16rem;
  }

  .header {
    max-width: 14rem;
    margin: 2rem auto;
    color: $primary-color;
    font-weight: 100;
    font-size: 4rem;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .paragraph {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    .header {
      max-width: none;
    }

    .paragraph {
      max-width: none;
    }
  }
</style>

<script lang="ts">
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
</script>

<main class="main">
  <img src="{logo}" alt="Svelte Logo" class="logo" />
  <h1 class="header">Hello Typescript!</h1>

  <Counter />

  <p class="paragraph">
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p class="paragraph">
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>
