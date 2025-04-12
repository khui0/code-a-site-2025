<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/button.svelte";
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-10 text-center">
  <span class="bubbles text-accent idle relative text-8xl">
    <h1 class="absolute top-2 left-0 z-[-1] brightness-90">Egg Hunt</h1>
    <h1 class="">Egg Hunt</h1>
  </span>
  <Button
    type="accent"
    onclick={() => {
      goto("play");
    }}>New Game</Button
  >
  <div>
    <p class="text-base-content/50 text-lg font-medium">By Kenny Hui</p>
    <p><a class="text-accent-content font-bold" href="https://kennyhui.dev/">kennyhui.dev</a></p>
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
