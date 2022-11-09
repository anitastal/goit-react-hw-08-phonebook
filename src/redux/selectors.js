export const getFilteredContacts = state =>
  state.contacts.items.filter(item =>
    item.name.toLowerCase().includes(state.filter.filter.toLowerCase())
  );
export const getFilter = state => state.filter.filter;

export const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR',
};
