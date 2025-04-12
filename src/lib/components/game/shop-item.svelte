<script lang="ts">
  import type { Snippet } from "svelte";
  import { gameState } from "../state.svelte";
  import Button from "../button.svelte";

  let {
    children,
    owned = $bindable(),
    price,
    item,
  }: {
    children?: Snippet;
    owned: number;
    price: number;
    item: string;
  } = $props();
</script>

<li
  class={{
    "rounded-box bg-base-200 flex w-full items-center gap-1 p-3": true,
    "pointer-events-none opacity-50": (gameState.current?.balance || 0) < price,
  }}
>
  {@render children?.()}
  <p class="text-accent-content text-3xl font-semibold">{owned}</p>
  <div class="flex flex-1 items-center justify-end gap-2">
    <p class="text-primary-content text-3xl font-semibold">${price.toLocaleString()}</p>
    <Button
      type="accent"
      onclick={() => {
        if (gameState.current === null) return;
        if (gameState.current.balance >= price) {
          gameState.current.balance -= price;
          owned++;
        }
      }}
      >Purchase {item}
    </Button>
  </div>
</li>
