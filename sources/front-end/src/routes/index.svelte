<script>
  import TextInput from '$lib/controls/TextInput.svelte';
  import SubmitButton from '$lib/controls/SubmitButton.svelte';

  const textInputsConfigs = [
    {
      label: 'first name',
      name: 'first-name',
    },
    {
      label: 'last name',
      name: 'last-name',
    }
  ];

  const idByName = (name = null) => {
    if (name === null) {
      throw new ReferenceError('name is undefined');
    }

    return `id:${name}`;
  }

  const handleSumbit = (submitEvent = null) => {
    console.log(submitEvent);
  }
</script>

<style>
  form {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: var(--grid-gap);
    align-self: center;
    top: 50%;

    border: 1px solid white;
    padding: min(1.5vh, 1.5vw);
  }

  .form-row,
  .single-item-row {
    display: grid;
    grid-template-rows: 1fr;
    gap: var(--grid-gap);
    justify-content: center;
    align-items: center;
    padding: min(1.5vh, 1.5vw) min(0.5vh, 0.5vw);
  }
  
  .form-row {
    grid-template-columns: 1fr 2fr;
  }

  .single-item-row {
    grid-template-columns: 1fr;
  }
</style>

<form on:submit|preventDefault|stopPropagation={handleSumbit}>
  {#each textInputsConfigs as textInputsConfig}
    {@const textInputId = idByName(textInputsConfig.name)}

    <div class='form-row'>
      <label for={textInputId}>{textInputsConfig.label}</label>
      <input type='text' id={textInputId} name={textInputsConfig.name} />
    </div>
  {/each}

  <div class='single-item-row'>
    <SubmitButton />
  </div>
</form>
