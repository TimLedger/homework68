import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {Form, TaskApi, Task} from "../../types";
import {RootState} from "../../app/store";

export const fetchTasks = createAsyncThunk(
    'tasks/fetch',
    async () => {
        const request = await axiosApi.get<TaskApi | null>('/tasks.json');
        const tasks = request.data;
        let newTasks: Task[] = [];

        if (tasks) {
            newTasks = Object.keys(tasks).map((key) => {
                return {...tasks[key], id: key};
            });
        }

        return newTasks;
    },
);

export const addTasks = createAsyncThunk<void, Form>(
    'tasks/add',
    async (data) => {
        await axiosApi.post('/tasks.json', data);
    },
);

export const deleteTasks = createAsyncThunk(
    'tasks/delete',
    async (id: string) => {
            await axiosApi.delete('/tasks/' + id + '.json');
    },
);

export const statusTasks = createAsyncThunk<void, string, {state: RootState}>(
    'tasks/status',
    async (id,thunkAPI) => {
        const tasks = thunkAPI.getState().tasks.items;
        const currentTask = tasks.find(item => item.id === id)!;
        await axiosApi.put('/tasks/' + id + '.json', {
            title: currentTask.title,
            status: !currentTask.status,
        });
    },
);