import {Task} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchTasks, addTasks, deleteTasks, statusTasks} from "./tasksThunks";

interface TasksState {
    items: Task[];
    fetchLoading: boolean;
    deleteLoading: boolean;
    postLoading: boolean;
    putLoading: boolean;
}

const initialState: TasksState = {
    items: [],
    fetchLoading: false,
    deleteLoading: false,
    postLoading: false,
    putLoading: false,
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.fetchLoading = true;
        });

        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.fetchLoading = false;
            state.items = action.payload;
        });

        builder.addCase(fetchTasks.rejected, (state) => {
            state.fetchLoading = false;
        });

        builder.addCase(deleteTasks.pending, (state) => {
            state.deleteLoading = true;
        });

        builder.addCase(deleteTasks.fulfilled, (state) => {
            state.deleteLoading = false;
        });

        builder.addCase(deleteTasks.rejected, (state) => {
            state.deleteLoading = false;
        });

        builder.addCase(addTasks.pending, (state) => {
            state.postLoading = true;
        });

        builder.addCase(addTasks.fulfilled, (state) => {
            state.postLoading = false;
        });

        builder.addCase(addTasks.rejected, (state) => {
            state.putLoading = false;
        });

        builder.addCase(statusTasks.pending, (state) => {
            state.postLoading = true;
        });

        builder.addCase(statusTasks.fulfilled, (state) => {
            state.putLoading = false;
        });

        builder.addCase(statusTasks.rejected, (state) => {
            state.putLoading = false;
        });
    },
});

export const tasksReducer = tasksSlice.reducer;
