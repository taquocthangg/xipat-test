import { configureStore } from '@reduxjs/toolkit';

import todoSlice from "./slice/todo/todoSlice.js";

export const store = configureStore({
    reducer: {
        todos: todoSlice,
    },
});
