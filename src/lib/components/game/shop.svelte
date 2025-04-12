<script lang="ts">
  import Button from "../button.svelte";

  let modal: HTMLDialogElement | null = $state(null);

  export const show = () => {
    modal?.showModal();
  };

  export const close = () => {
    modal?.close();
  };
</script>

<dialog class="modal" bind:this={modal}>
  <div class="modal-box flex flex-col items-center gap-2">
    <span class="bubbles text-accent idle relative text-6xl">
      <h3 class="absolute top-1.5 left-0 z-[-1] brightness-90">Shop</h3>
      <h3 class="">Shop</h3>
    </span>
    <p class="py-4">Press ESC key or click outside to close</p>
    <Button onclick={close}>Close</Button>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
