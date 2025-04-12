<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    children,
    onclick,
    disabled,
    held,
    size = "normal",
    type = "primary",
    label,
  }: {
    children: Snippet;
    onclick?: Function;
    disabled?: boolean;
    held?: boolean;
    size?: "normal" | "small";
    type?: "primary" | "secondary" | "accent" | "neutral";
    label?: string;
  } = $props();
</script>

<button
  class={{
    "group rounded-field relative flex-shrink-0 touch-manipulation font-semibold text-white": true,
    "pointer-events-none opacity-50": disabled,
    "h-12 px-4 text-xl": size === "normal",
    "h-8 px-3 text-base": size === "small",
  }}
  onclick={() => {
    onclick?.();
  }}
  {disabled}
  aria-label={label}
>
  <span role="presentation" class="opacity-0">{@render children?.()}</span>
  <div
    class={{
      "rounded-field absolute bottom-0 left-0 w-full brightness-90": true,
      "h-10": size === "normal",
      "h-6": size === "small",
      "bg-primary text-primary-content": type === "primary",
      "bg-secondary text-secondary-content": type === "secondary",
      "bg-accent text-accent-content": type === "accent",
      "bg-neutral text-neutral-content": type === "neutral",
    }}
  ></div>
  <div
    class={{
      "rounded-field absolute top-0 left-0 flex w-full items-center justify-center transition-[top] group-hover:top-0.5 group-active:top-1": true,
      "top-0.5": held,
      "h-10": size === "normal",
      "h-6": size === "small",
      "bg-primary text-primary-content": type === "primary",
      "bg-secondary text-secondary-content": type === "secondary",
      "bg-accent text-accent-content": type === "accent",
      "bg-neutral text-neutral-content": type === "neutral",
    }}
  >
    {@render children?.()}
  </div>
</button>
