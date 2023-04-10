import { createSelector } from '@reduxjs/toolkit';

export const getFormCards = createSelector([(state) => state.client], (cards) => cards.formCards);
export const getSearchFieldValue = createSelector([(state) => state.client], (s) => s.search);
export const getPageValue = createSelector([(state) => state.client], (p) => p.page);
