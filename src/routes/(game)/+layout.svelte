<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/button.svelte";
  import Bunny from "$lib/components/game/bunny.svelte";
  import Flower from "$lib/components/game/flower.svelte";
  import Grass from "$lib/components/game/grass.svelte";
  import Shop from "$lib/components/game/shop.svelte";
  import Tree from "$lib/components/game/tree.svelte";
  import {
    calculateRate,
    gameState,
    gameTickInterval,
    moneyPerSecond,
  } from "$lib/components/state.svelte";
  import { onMount } from "svelte";
  import MingcuteBack2Fill from "~icons/mingcute/back-2-fill";
  import MingcuteShoppingCart1Fill from "~icons/mingcute/shopping-cart-1-fill";

  let { children } = $props();

  let shop: Shop | null = $state(null);

  onMount(() => {
    clearInterval(gameTickInterval.current);
    gameTickInterval.current = setInterval(() => {
      if (gameState.current === null) return;
      gameState.current.balance += gameState.current.bunny * moneyPerSecond.current;
    }, 1000);
  });

  $effect(() => {
    if (gameState.current === null) {
      localStorage.removeItem("state");
    } else {
      moneyPerSecond.current = calculateRate(gameState.current);
      localStorage.setItem("state", JSON.stringify(gameState.current));
    }
  });
</script>

<div class="bg-base-300/70 grid h-full w-full grid-rows-[auto_1fr_auto] gap-2 p-4">
  <div class="flex flex-wrap items-center justify-between">
    <div class="flex flex-wrap items-center gap-5">
      <p class="text-accent-content text-4xl font-bold">
        ${gameState.current?.balance.toLocaleString()}
      </p>
      <p class="text-accent-content/50 text-4xl font-semibold">
        ${moneyPerSecond.current.toLocaleString()}/<Bunny size={30} />/sec
      </p>
    </div>
    <div class="flex flex-wrap items-center">
      <Button
        onclick={() => {
          goto("/");
        }}
        ><MingcuteBack2Fill />
      </Button>
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
        }}
        ><MingcuteShoppingCart1Fill /> Shop
      </Button>
    </div>
    <div class="flex flex-wrap items-center gap-5 overflow-auto">
      <span class="text-accent-content flex items-center gap-1 text-3xl font-semibold">
        <div class="drop-shadow-sm">
          <Bunny size={40} />
        </div>
        <p>{gameState.current?.bunny}</p>
      </span>
      <span class="text-accent-content flex items-center gap-1 text-3xl font-semibold">
        <div class="drop-shadow-sm">
          <Grass size={40} />
        </div>
        <p>{gameState.current?.grass}</p>
      </span>
      <span class="text-accent-content flex items-center gap-1 text-3xl font-semibold">
        <div class="drop-shadow-sm">
          <Flower size={40} />
        </div>
        <p>{gameState.current?.flower}</p>
      </span>
      <span class="text-accent-content flex items-center gap-1 text-3xl font-semibold">
        <div class="drop-shadow-sm">
          <Tree size={40} />
        </div>
        <p>{gameState.current?.tree}</p>
      </span>
    </div>
  </div>
</div>
<Shop bind:this={shop} />
