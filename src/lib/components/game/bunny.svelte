<script lang="ts">
  let {
    onclick,
    size = 100,
  }: {
    onclick?: (e: MouseEvent) => void;
    size?: number;
  } = $props();
</script>

<button
  class="shrink-0"
  style="width: {size}px; height: {size}px;"
  aria-label="bunny"
  onclick={(e) => {
    onclick?.(e);
  }}
>
  <enhanced:img
    src="$lib/assets/bunny.svg"
    alt="bunny"
    style="width: {size}px; height: {size}px;"
  />
</button>
