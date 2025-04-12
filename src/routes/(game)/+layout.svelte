<script lang="ts">
  import Button from "$lib/components/button.svelte";

  let { children } = $props();
</script>

<div class="bg-base-300/70 grid h-full w-full grid-rows-[auto_1fr_auto] gap-2 p-4">
  <div class="flex flex-wrap items-center justify-between">
    <div class="flex flex-wrap items-center gap-5">
      <p class="text-accent-content text-4xl font-bold">$10</p>
      <p class="text-accent-content/50 text-4xl font-semibold">$4/sec</p>
    </div>
    <div class="flex flex-wrap items-center">
      <Button>Quit</Button>
    </div>
  </div>
  <div class="bg-base-100 rounded-box card">
    {@render children()}
  </div>
  <div class="flex flex-wrap items-center justify-between">
    <div class="flex flex-wrap items-center">
      <Button type="accent">Shop</Button>
    </div>
  </div>
</div>
