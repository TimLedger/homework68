import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TasksState {
  value: string;
  completed: boolean;
};

const initialState: TasksState = {
  value: '',
  completed: false,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
       
    
    
  },
});


export const tasksReducer = tasksSlice.reducer;