export const getContacts = store => store.rootReducer.contacts.items;
export const getFilter = store => store.rootReducer.filter;
export const getLoading = store => store.rootReducer.contacts.isLoading;
export const getError = store => store.rootReducer.contacts.error;
export const getIsLogin = store => store.rootReducer.auth.isLogin;
export const getUserName = store => store.rootReducer.auth.user.name;
export const getToken = store => store.rootReducer.auth.token;
