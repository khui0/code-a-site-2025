<script lang="ts">
  import Button from "../button.svelte";
  import { gameState } from "../state.svelte";
  import Bunny from "./bunny.svelte";
  import Flower from "./flower.svelte";
  import Grass from "./grass.svelte";
  import ShopItem from "./shop-item.svelte";
  import Tree from "./tree.svelte";

  let modal: HTMLDialogElement | null = $state(null);

  export const show = () => {
    modal?.showModal();
  };

  export const close = () => {
    modal?.close();
  };

  let grassPrice: number = $derived(10 * 1.2 ** (gameState.current?.grass || 0));
  let flowerPrice: number = $derived(50 * 1.2 ** (gameState.current?.flower || 0));
  let treePrice: number = $derived(100 * 1.23 ** (gameState.current?.tree || 0));
  let bunnyPrice: number = $derived(1000 * 2 ** ((gameState.current?.bunny || 1) - 1));
</script>

<dialog class="modal" bind:this={modal}>
  <div class="modal-box flex max-w-xl flex-col items-center gap-2">
    <span class="bubbles text-accent idle relative text-6xl">
      <h3 class="absolute top-1.5 left-0 z-[-1] brightness-90">Shop</h3>
      <h3 class="">Shop</h3>
    </span>
    <ul class="flex w-full flex-col gap-4">
      {#if gameState.current}
        <ShopItem item="Grass" price={grassPrice} bind:owned={gameState.current.grass}>
          <Grass size={40} />
        </ShopItem>
        <ShopItem item="Flower" price={flowerPrice} bind:owned={gameState.current.flower}>
          <Flower size={40} />
        </ShopItem>
        <ShopItem item="Tree" price={treePrice} bind:owned={gameState.current.tree}>
          <Tree size={40} />
        </ShopItem>
        <ShopItem item="Bunny" price={bunnyPrice} bind:owned={gameState.current.bunny}>
          <Bunny size={40} />
        </ShopItem>
      {/if}
    </ul>
    <Button onclick={close}>Close</Button>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
