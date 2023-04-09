import { configureStore, createReducer } from '@reduxjs/toolkit';
import { FormCardType, RickAndMortyApi } from 'types';
import { AddFormCard, LoadApiData, SearchFieldValue } from './actions';

export type ROOT_STORE_TYPE = {
  api: Partial<RickAndMortyApi>;
  search: string;
  formCards: FormCardType[];
};

const INITIAL_STORE: ROOT_STORE_TYPE = {
  api: {},
  search: '',
  formCards: [],
};

const reducer = createReducer(INITIAL_STORE, (builder) => {
  builder
    .addCase(LoadApiData, (state, action) => {
      Object.assign(state.api, action.payload);
    })
    .addCase(SearchFieldValue, (state, action) => {
      state.search = action.payload;
    })
    .addCase(AddFormCard, (state, action) => {
      state.formCards.push(action.payload);
    });
});

export const store = configureStore({ reducer: reducer });
console.log('store', store);
export type AppDispatch = typeof store.dispatch;
