import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '../containers/tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;