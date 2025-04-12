<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/button.svelte";
  import { gameState, newGame } from "$lib/components/state.svelte";
</script>

<div
  class="flex min-h-full w-full flex-col items-center justify-center gap-10 overflow-hidden text-center p-10"
>
  <span class="bubbles text-accent idle relative text-8xl">
    <h1 class="absolute top-2 left-0 z-[-1] brightness-90">Bunny Simulator</h1>
    <h1 class="">Bunny Simulator</h1>
  </span>
  <div class="flex flex-col items-center gap-2">
    {#if gameState !== null}
      <Button
        type="accent"
        onclick={() => {
          goto("/play");
        }}
        >Continue
      </Button>
    {/if}
    <Button
      type={gameState === null ? "accent" : "neutral"}
      onclick={() => {
        newGame();
        goto("/play");
      }}
      >New Game
    </Button>
  </div>
  <div>
    <p class="text-base-content/50 text-lg font-medium">By Kenny Hui</p>
    <p>
      <a
        class="text-accent-content font-bold"
        target="_blank"
        rel="noopener noreferrer"
        href="https://kennyhui.dev/">kennyhui.dev</a
      >
    </p>
  </div>
  <article>
    <h2 class="bubbles text-accent-content text-3xl">How to play:</h2>
    <ol class="bg-base-200 rounded-box p-4">
      <li>Each bunny produces $1/second by default</li>
      <li>Each grass increases the rate by $1</li>
      <li>Each flower increases the rate by $5</li>
      <li>Each tree increases the rate by 10%</li>
      <li>Get rich</li>
    </ol>
  </article>
  <div>
    <p class="text-base-content/50 text-lg font-medium">Created for Code-A-Site Spring 2025</p>
    <p>
      <a
        class="text-accent-content font-bold"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/khui0/code-a-site-2025">Source</a
      >
    </p>
  </div>
</div>

<style>
  .idle {
    animation: idle 1s ease-in-out infinite alternate;
  }

  @keyframes idle {
    0% {
      transform: rotateZ(-5deg);
    }
    100% {
      transform: rotateZ(5deg);
    }
  }
</style>
