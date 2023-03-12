import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts-slice';
import { filterReducer } from './filter-slice';
import { authReducer } from './auth-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: { rootReducer },
});
