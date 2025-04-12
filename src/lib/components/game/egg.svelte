<script lang="ts">
  let {
    onclick,
    size = 50,
  }: {
    onclick?: (e: MouseEvent) => void;
    size?: number;
  } = $props();
</script>

<button
  class="shrink-0"
  style="width: {size}px; height: {size}px;"
  aria-label="egg"
  onclick={(e) => {
    onclick?.(e);
  }}
>
  <enhanced:img src="$lib/assets/egg.svg" alt="egg" style="width: {size}px; height: {size}px;" />
</button>
