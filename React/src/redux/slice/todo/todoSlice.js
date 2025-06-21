import { createSlice } from '@reduxjs/toolkit';

import initialState from './constants/todoInitialState.js';
import reducers from './constants/todoReducers';

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers,
});

export const {
    addTodo,
    editTodo,
    toggleTodo,
    toggleEdit,
    deleteTodo,
    setFilter,
    loadFromStorage,
} = todoSlice.actions;

export default todoSlice.reducer;
