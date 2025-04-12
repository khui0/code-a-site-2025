<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Egg Hunt</title>
</svelte:head>

{@render children()}
