import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import blogReducer from '../features/slice/blogSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
