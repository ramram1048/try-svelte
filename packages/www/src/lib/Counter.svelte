<style lang="scss" module>
  @import '../themes/colors';

  .button {
    width: 200px;
    padding: 1em 2em;
    color: $primary-color;
    font-size: inherit;
    font-family: inherit;
    background-color: rgba(255, 62, 0, 0.1);
    border: 2px solid rgba(255, 62, 0, 0);
    border-radius: 2em;
    outline: none;
    cursor: pointer;
    font-variant-numeric: tabular-nums;
  }

  .button:focus {
    border: 2px solid $primary-color;
  }

  .button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>

<script lang="ts">
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click="{increment}" class="button">
  Clicks: {count}
</button>
