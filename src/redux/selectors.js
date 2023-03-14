export const getContacts = store => store.persistedReducer.contacts.items;
export const getFilter = store => store.persistedReducer.filter;
export const getLoading = store => store.persistedReducer.contacts.isLoading;
export const getError = store => store.persistedReducer.contacts.error;
export const getIsLogin = store => store.persistedReducer.auth.isLogin;
export const getUserName = store => store.persistedReducer.auth.user.name;
export const getToken = store => store.persistedReducer.auth.token;
export const getUserError = store => store.persistedReducer.auth.error;
