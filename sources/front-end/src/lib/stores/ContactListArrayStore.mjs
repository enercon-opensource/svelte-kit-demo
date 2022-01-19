import {
  derived,
} from 'svelte/store';
import {
  ContactListStore,
} from '$lib/stores/ContactListStore.mjs';

export const ContactListArrayStore = derived(ContactListStore, (state = null) => {
  const result = [];

  for (const value of state.values()) {
    result.push(value);
  }

  console.log('ContactListArrayStore::state', state, result);

  return result;
});
