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
  aria-label="flower"
  onclick={(e) => {
    onclick?.(e);
  }}
>
  <enhanced:img
    src="$lib/assets/flower.svg"
    alt="flower"
    style="width: {size}px; height: {size}px;"
  />
</button>
