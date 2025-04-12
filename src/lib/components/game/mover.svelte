<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  let {
    children,
    i = 0,
    bottom,
  }: {
    children?: Snippet;
    i: number;
    bottom: string;
  } = $props();

  let position: number = $state(i * 20);

  let back: boolean = $state(false);

  onMount(() => {
    requestAnimationFrame(update);
  });

  let previousTime: number = 0;

  function update(timestamp: number) {
    const deltaT = (timestamp - previousTime) / 1000;
    previousTime = timestamp;

    position += 10 * deltaT * (back ? -1 : 1);
    if (position >= 100) {
      back = true;
    }
    if (position <= 0) {
      back = false;
    }

    position = Math.min(Math.max(0, position), 100);

    requestAnimationFrame(update);
  }
</script>

<div
  class={{
    "absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-500": true,
    "rotate-y-180": !back,
    "rotate-y-0": back,
  }}
  style="left: {position}%; bottom: {bottom}; left"
>
  {@render children?.()}
</div>
