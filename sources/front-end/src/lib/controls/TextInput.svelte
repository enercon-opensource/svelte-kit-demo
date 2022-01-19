<script>
  export let label;
  export let name = null;

  let inputId;

  $: if (name !== null) {
    inputId = `id:${name}`;
  }
</script>

<style>
</style>

{#if inputId !== null}
  <label for={inputId}>{label}</label>
  <input type='text' id={inputId} {name} />
{:else}
  ...
{/if}