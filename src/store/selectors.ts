import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const getFormCards = createSelector(
  [(state: RootState) => state.client],
  (cards) => cards.formCards
);
export const getSearchFieldValue = createSelector(
  [(state: RootState) => state.client],
  (s) => s.search
);
export const getPageValue = createSelector([(state: RootState) => state.client], (p) => p.page);
