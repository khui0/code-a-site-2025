<script lang="ts">
  let {
    onclick,
    size = 200,
  }: {
    onclick?: (e: MouseEvent) => void;
    size?: number;
  } = $props();
</script>

<button
  class="shrink-0"
  style="width: {size}px; height: {size}px;"
  aria-label="tree"
  onclick={(e) => {
    onclick?.(e);
  }}
>
  <enhanced:img src="$lib/assets/tree.svg" alt="tree" style="width: {size}px; height: {size}px;" />
</button>
