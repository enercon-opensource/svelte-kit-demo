import {
  writable,
} from 'svelte/store';

const STORE = new Map();

const addNewContact = (contact = null, state = null) => {
  if (state.has(contact.email) === false) {
    state.set(contact.email, contact);
  }

  return state;
}

function createContactListStore() {
  const {
    subscribe,
    update,
  } = writable(STORE);

  return {
    subscribe,
    setContact: (contact = null) => update((state) => {
      console.log('setContact::state', state);

      return addNewContact(contact, state);
    }),
  }
}

export const ContactListStore = createContactListStore();
