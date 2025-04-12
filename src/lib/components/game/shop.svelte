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
</script>

<dialog class="modal" bind:this={modal}>
  <div class="modal-box flex flex-col items-center gap-2">
    <span class="bubbles text-accent idle relative text-6xl">
      <h3 class="absolute top-1.5 left-0 z-[-1] brightness-90">Shop</h3>
      <h3 class="">Shop</h3>
    </span>
    <ul class="flex w-full flex-col gap-4">
      {#if gameState.current}
        <ShopItem item="Grass" price={10} bind:owned={gameState.current.grass}>
          <Grass size={40} />
        </ShopItem>
        <ShopItem item="Flower" price={50} bind:owned={gameState.current.flower}>
          <Flower size={40} />
        </ShopItem>
        <ShopItem item="Tree" price={100} bind:owned={gameState.current.tree}>
          <Tree size={40} />
        </ShopItem>
        <ShopItem item="Bunny" price={1000} bind:owned={gameState.current.bunny}>
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
