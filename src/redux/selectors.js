export const selectGetContact = state => state.contacts;
export const selectContactItems = state => state.contacts.items;
export const selectFilters = state => state.filter.filter;
export const selectModalState = state => state.modal.isModalOpen;
export const selectModalOpened = state => state.modal.openContact;
