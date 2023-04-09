import { createAction } from '@reduxjs/toolkit';
import { FormCardType, RickAndMortyApi } from 'types';

export const LoadApiData = createAction<RickAndMortyApi>('react-redux/loadData');
export const SearchFieldValue = createAction<string>('react-redux/SearchFieldValue');
export const AddFormCard = createAction<FormCardType>('react-redux/addFormCard');
