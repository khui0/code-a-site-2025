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
  aria-label="grass"
  onclick={(e) => {
    onclick?.(e);
  }}
>
  <enhanced:img
    src="$lib/assets/grass.svg"
    alt="grass"
    style="width: {size}px; height: {size}px;"
  />
</button>
