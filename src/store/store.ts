import { configureStore, createReducer } from '@reduxjs/toolkit';
import { FormCardType } from 'types';
import { AddFormCard, AddSearchFieldValue, changePageValue } from './actions';
import { rickAndMorty } from './rickAndMorty';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export type ROOT_STORE_TYPE = {
  search: string;
  formCards: FormCardType[];
  page: string;
};

const INITIAL_STORE: ROOT_STORE_TYPE = {
  search: '',
  formCards: [],
  page: '1',
};

const reducer = createReducer(INITIAL_STORE, (builder) => {
  builder
    .addCase(changePageValue, (state, action) => {
      state.page = action.payload;
    })
    .addCase(AddSearchFieldValue, (state, action) => {
      state.search = action.payload;
    })
    .addCase(AddFormCard, (state, action) => {
      state.formCards.push(action.payload);
    });
});

export const store = configureStore({
  reducer: { [rickAndMorty.reducerPath]: rickAndMorty.reducer, client: reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMorty.middleware),
});
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
