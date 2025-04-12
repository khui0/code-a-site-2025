<script lang="ts">
  import Bunny from "$lib/components/game/bunny.svelte";
  import Egg from "$lib/components/game/egg.svelte";
  import Flower from "$lib/components/game/flower.svelte";
  import Grass from "$lib/components/game/grass.svelte";
  import Alea from "alea";
  import { createNoise2D } from "simplex-noise";

  let grassCount: number = $state(20);

  const prng = Alea("stony-brook");

  const noise2D = createNoise2D(prng);
</script>

<div class="relative h-full w-full bg-sky-200">
  <div class="bg-accent absolute bottom-0 h-40 w-full">
    {#each Array(grassCount) as _, i}
      <div
        class="absolute -translate-x-1/2 -translate-y-1/2"
        style="left: {noise2D(i, i) * 50 + 50}%; bottom: {100 * Math.sin(i * 7) - 40}%"
      >
        <Grass />
      </div>
    {/each}
  </div>
  <div class="absolute">
    <Egg />
    <Bunny />

    <Flower />
  </div>
</div>
