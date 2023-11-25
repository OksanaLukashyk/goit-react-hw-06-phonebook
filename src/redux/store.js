import { combineReducers, createStore } from 'redux';
import { contactsReducer, filterReducer } from './contacts/contacts.reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  contactsStore: contactsReducer,
  filterStore: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
