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
  search: new URLSearchParams(window.location.search).get('search') ?? '',
  formCards: [],
  page: new URLSearchParams(window.location.search).get('pages') ?? '1',
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
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  client: reducer,
  [rickAndMorty.reducerPath]: rickAndMorty.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof store.getState>;
export default store;
// export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
