<script>
  import {
    onDestroy,
  } from 'svelte';
  import {
    ContactListStore,
  } from '$lib/stores/ContactListStore.mjs';
  import Form from '$lib/controls/Form.svelte';

  const unsubscribeFromStore = ContactListStore.subscribe((state) => {
    console.log({ state });
  });

  const handleFormData = ({ detail = null }) => {
    console.log(detail);

    ContactListStore.setContact(detail);
  }

  onDestroy(unsubscribeFromStore);
</script>

<Form on:formData={handleFormData} />
