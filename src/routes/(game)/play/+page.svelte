<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import Bunny from "$lib/components/game/bunny.svelte";
  import Egg from "$lib/components/game/egg.svelte";
  import Flower from "$lib/components/game/flower.svelte";
  import Grass from "$lib/components/game/grass.svelte";
  import Mover from "$lib/components/game/mover.svelte";
  import Tree from "$lib/components/game/tree.svelte";
  import { gameState } from "$lib/components/state.svelte";
  import Alea from "alea";
  import { createNoise2D } from "simplex-noise";
  import { onMount } from "svelte";

  const prng = Alea("stony-brook");

  const noise2D = createNoise2D(prng);

  let ready: boolean = $state(false);

  onMount(() => {
    ready = true;
  });
</script>

<div class="relative h-full w-full bg-sky-200">
  {#if ready}
    <!-- Trees -->
    <div class="absolute inset-0">
      {#each Array(gameState.current?.tree) as _, i}
        <div
          class="absolute bottom-35 -translate-x-1/2"
          style="left: {noise2D(i * 1.3, i / 2) * 50 + 50}%;"
        >
          <Tree />
        </div>
      {/each}
    </div>
    <!-- Grass -->
    <div class="bg-accent absolute bottom-0 h-40 w-full">
      {#each Array(gameState.current?.grass) as _, i}
        <div
          class="absolute -translate-x-1/2 -translate-y-1/2"
          style="left: {noise2D(i, i) * 50 + 50}%; bottom: {100 * Math.sin(i * 7) - 40}%"
        >
          <Grass />
        </div>
      {/each}
    </div>
    <!-- Flower -->
    <div class="absolute bottom-0 h-40 w-full">
      {#each Array(gameState.current?.flower) as _, i}
        <div
          class="absolute -translate-x-1/2 -translate-y-1/2"
          style="left: {noise2D(i * 2, i - 15) * 50 + 50}%; bottom: {100 * Math.sin(i * 2) - 40}%"
        >
          <Flower />
        </div>
      {/each}
    </div>
    <!-- Bunny -->
    <div class="absolute bottom-0 h-40 w-full">
      {#each Array(gameState.current?.bunny) as _, i}
        <Mover {i} bottom="{100 * Math.sin(i * 2) - 40}%">
          <div class="hop" style="animation-delay: {i * 100}ms;">
            <Bunny />
          </div>
        </Mover>
      {/each}
    </div>
  {/if}
</div>

<style>
  .hop {
    animation: hop 500ms cubic-bezier(0.12, 0, 0.39, 0) infinite alternate;
  }

  @keyframes hop {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(20px);
    }
  }
</style>
