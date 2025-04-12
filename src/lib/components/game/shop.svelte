<script lang="ts">
  import Button from "../button.svelte";
  import { gameState } from "../state.svelte";
  import Bunny from "./bunny.svelte";
  import Flower from "./flower.svelte";
  import Grass from "./grass.svelte";
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
      <!-- Grass -->
      <li
        class={{
          "rounded-box bg-base-200 flex w-full items-center gap-1 p-3": true,
          "pointer-events-none opacity-50": (gameState.current?.balance || 0) < 10,
        }}
      >
        <Grass size={40} />
        <p class="text-accent-content text-3xl font-semibold">{gameState.current?.grass}</p>
        <div class="flex flex-1 items-center justify-end gap-2">
          <p class="text-primary-content text-3xl font-semibold">$10</p>
          <Button
            type="accent"
            onclick={() => {
              if (gameState.current === null) return;
              if (gameState.current.balance >= 10) {
                gameState.current.balance -= 10;
                gameState.current.grass++;
              }
            }}
            >Purchase Grass
          </Button>
        </div>
      </li>
      <!-- Flower -->
      <li
        class={{
          "rounded-box bg-base-200 flex w-full items-center gap-1 p-3": true,
          "pointer-events-none opacity-50": (gameState.current?.balance || 0) < 250,
        }}
      >
        <Flower size={40} />
        <p class="text-accent-content text-3xl font-semibold">{gameState.current?.flower}</p>
        <div class="flex flex-1 items-center justify-end gap-2">
          <p class="text-primary-content text-3xl font-semibold">$250</p>
          <Button
            type="accent"
            onclick={() => {
              if (gameState.current === null) return;
              if (gameState.current.balance >= 250) {
                gameState.current.balance -= 250;
                gameState.current.flower++;
              }
            }}
            >Purchase Flower
          </Button>
        </div>
      </li>
      <!-- Tree -->
      <li
        class={{
          "rounded-box bg-base-200 flex w-full items-center gap-1 p-3": true,
          "pointer-events-none opacity-50": (gameState.current?.balance || 0) < 500,
        }}
      >
        <Tree size={40} />
        <p class="text-accent-content text-3xl font-semibold">{gameState.current?.tree}</p>
        <div class="flex flex-1 items-center justify-end gap-2">
          <p class="text-primary-content text-3xl font-semibold">$500</p>
          <Button
            type="accent"
            onclick={() => {
              if (gameState.current === null) return;
              if (gameState.current.balance >= 500) {
                gameState.current.balance -= 500;
                gameState.current.tree++;
              }
            }}
            >Purchase Tree
          </Button>
        </div>
      </li>
      <!-- Bunny -->
      <li
        class={{
          "rounded-box bg-base-200 flex w-full items-center gap-1 p-3": true,
          "pointer-events-none opacity-50": (gameState.current?.balance || 0) < 1000,
        }}
      >
        <Bunny size={40} />
        <p class="text-accent-content text-3xl font-semibold">{gameState.current?.bunny}</p>
        <div class="flex flex-1 items-center justify-end gap-2">
          <p class="text-primary-content text-3xl font-semibold">$1000</p>
          <Button
            type="accent"
            onclick={() => {
              if (gameState.current === null) return;
              if (gameState.current.balance >= 100) {
                gameState.current.balance -= 1000;
                gameState.current.bunny++;
              }
            }}
            >Purchase Bunny
          </Button>
        </div>
      </li>
    </ul>
    <Button onclick={close}>Close</Button>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
