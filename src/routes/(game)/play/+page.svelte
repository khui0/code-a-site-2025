<script lang="ts">
  import Bunny from "$lib/components/game/bunny.svelte";
  import Egg from "$lib/components/game/egg.svelte";
  import Flower from "$lib/components/game/flower.svelte";
  import Grass from "$lib/components/game/grass.svelte";
  import Mover from "$lib/components/game/mover.svelte";
  import Tree from "$lib/components/game/tree.svelte";
  import Alea from "alea";
  import { createNoise2D } from "simplex-noise";

  const prng = Alea("stony-brook");

  const noise2D = createNoise2D(prng);
</script>

<div class="relative h-full w-full bg-sky-200">
  <!-- Trees -->
  <div class="absolute inset-0">
    {#each Array(40) as _, i}
      <div
        class="absolute bottom-35 -translate-x-1/2"
        style="left: {noise2D(i * 1.3, i / 2) * 50 + 50}%;"
      >
        <Tree />
      </div>
    {/each}
    <Egg />
    <Bunny />

    <Flower />
  </div>
  <!-- Grass -->
  <div class="bg-accent absolute bottom-0 h-40 w-full">
    {#each Array(50) as _, i}
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
    {#each Array(50) as _, i}
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
    {#each Array(2) as _, i}
      <Mover {i} bottom="{100 * Math.sin(i * 2) - 40}%">
        <div class="hop" style="animation-delay: {i * 100}ms;">
          <Bunny />
        </div>
      </Mover>
    {/each}
  </div>
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
