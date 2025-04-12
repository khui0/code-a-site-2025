<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/button.svelte";
  import Shop from "$lib/components/game/shop.svelte";
  import { gameState } from "$lib/components/state";
  import MingcuteBack2Fill from "~icons/mingcute/back-2-fill";
  import MingcuteShoppingCart1Fill from "~icons/mingcute/shopping-cart-1-fill";

  let { children } = $props();

  let shop: Shop | null = $state(null);
</script>

<div class="bg-base-300/70 grid h-full w-full grid-rows-[auto_1fr_auto] gap-2 p-4">
  <div class="flex flex-wrap items-center justify-between">
    <div class="flex flex-wrap items-center gap-5">
      <p class="text-accent-content text-4xl font-bold">${$gameState?.balance}</p>
      <p class="text-accent-content/50 text-4xl font-semibold">$4/sec</p>
    </div>
    <div class="flex flex-wrap items-center">
      <Button
        onclick={() => {
          goto("/");
        }}><MingcuteBack2Fill /></Button
      >
    </div>
  </div>
  <div class="bg-base-100 rounded-box card overflow-hidden">
    {@render children()}
  </div>
  <div class="flex flex-wrap items-center justify-between">
    <div class="flex flex-wrap items-center">
      <Button
        type="accent"
        onclick={() => {
          shop?.show();
        }}><MingcuteShoppingCart1Fill /> Shop</Button
      >
    </div>
  </div>
</div>
<Shop bind:this={shop} />
