<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children?: Snippet } = $props();
</script>

<span class="bubbles text-accent idle relative">
  <h1 class="absolute top-2 left-0 z-[-1] brightness-90">{@render children?.()}</h1>
  <h1 class="">{@render children?.()}</h1>
</span>
