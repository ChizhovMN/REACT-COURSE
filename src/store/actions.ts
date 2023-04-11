import { createAction } from '@reduxjs/toolkit';
import { FormCardType } from 'types';

export const changePageValue = createAction<string>('react-redux/changePage');
export const AddSearchFieldValue = createAction<string>('react-redux/AddSearchFieldValue');
export const AddFormCard = createAction<FormCardType>('react-redux/addFormCard');
