import {fakeTodos} from "./data.js";

export const loadTodosFromStorage = () => {
    const stored = JSON.parse(localStorage.getItem('todos'));

    if (!stored || !Array.isArray(stored) || stored.length === 0) {
        return fakeTodos;
    }

    return stored;
};

export const saveTodosToStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
