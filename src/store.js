import { configureStore } from '@reduxjs/toolkit';
import { bankingReducer } from './reducers/banking';

export const store = configureStore({ reducer: { bankingReducer }, });