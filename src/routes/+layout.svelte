<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Bunny Simulator</title>
</svelte:head>

{@render children()}
