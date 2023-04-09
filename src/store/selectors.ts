import { createSelector } from '@reduxjs/toolkit';
import { ROOT_STORE_TYPE } from './store';

export const getApiData = createSelector([(state: ROOT_STORE_TYPE) => state.api], (api) => api);
export const getFormCards = createSelector(
  [(state: ROOT_STORE_TYPE) => state.formCards],
  (cards) => cards
);
