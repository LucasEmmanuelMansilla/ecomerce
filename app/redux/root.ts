import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import DataSlice from './slices/DataSlice';

export const reducers = combineReducers({
  data: DataSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: [
    ...getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
  ],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
