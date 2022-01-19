<script>
  import {
    createEventDispatcher,
  } from 'svelte';

  const dispatch = createEventDispatcher();

  let firstNameControl;
  let firstNameValue = null;

  let lastNameControl;
  let lastNameValue = null;

  let emailControl;
  let emailValue = null;

  let buttonEnabled = false;
  
  $: {
    buttonEnabled = (firstNameValue !== null && firstNameControl.validity.valid === true)
      && (lastNameValue !== null && lastNameControl.validity.valid === true)
      && (emailValue !== null && emailControl.validity.valid === true);
  };

  const handleSumbit = (submitEvent = null) => {
    dispatch('formData', {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
    });
  }
</script>

<style>
  form {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      'labelFirstName inputFirstName'
      'labelLastName inputLastName'
      'labelEmail inputEmail'
      'submitButton submitButton'
    ;
    gap: var(--grid-gap);
    align-self: center;
    top: 50%;

    padding: min(1.5vh, 1.5vw);
    background-color: hsl(0deg 0% 15%);
  }

  label,
  input {
    min-height: var(--control-height);
    height: var(--control-height);
  }

  label[for='id:firstName'] {
    grid-area: labelFirstName;
  }

  input[id='id:firstName'] {
    grid-area: inputFirstName;
  }

  label[for='id:lastName'] {
    grid-area: labelLastName;
  }

  input[id='id:lastName'] {
    grid-area: inputLastName;
  }

  label[for='id:email'] {
    grid-area: labelEmail;
  }

  input[id='id:email'] {
    grid-area: inputEmail;
  }

  button[type='submit'] {
    grid-area: submitButton;
    background-color: hsl(183deg 100% 50%);

    pointer-events: none;
    filter: opacity(0.75) grayscale(1.0);
  }

  .buttonEnabled {
    pointer-events: all !important;
    filter: none !important;
  }
</style>

<form on:submit|preventDefault|stopPropagation={handleSumbit}>
  <label for='id:firstName'>first name</label>
  <input
    id='id:firstName'
    name='firstName'
    type='text'
    placeholder = 'your first name please'
    autocomplete = 'given-name'
    required
    bind:value={firstNameValue}
    bind:this={firstNameControl}
  />

  <label for='id:lastName'>last name</label>
  <input
    id='id:lastName'
    name='lastName'
    type='text'
    placeholder = 'your last name please'
    autocomplete = 'family-name'
    required
    bind:value={lastNameValue}
    bind:this={lastNameControl}
  />

  <label for='id:email'>email</label>
  <input
    id='id:email'
    name='email'
    type='email'
    placeholder = 'your email please'
    autocomplete = 'email'
    required
    bind:value={emailValue}
    bind:this={emailControl}
  />

  <button type='submit' class:buttonEnabled>submit</button>
</form>
