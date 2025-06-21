import {loadTodosFromStorage, saveTodosToStorage} from './todoStorage.js';

const reducers = {
    addTodo: (state, action) => {
        state.list.unshift({
            id: Date.now(),
            name: action.payload,
            completed: false,
            edit: false,
        });
        saveTodosToStorage(state.list);
    },
    editTodo: (state, action) => {
        const { id, name } = action.payload;
        const todo = state.list.find((t) => t.id === id);
        if (todo) {
            todo.name = name;
            saveTodosToStorage(state.list);
        }
    },
    toggleTodo: (state, action) => {
        const todo = state.list.find((t) => t.id === action.payload);
        if (todo) {
            todo.completed = !todo.completed;
            saveTodosToStorage(state.list);
        }
    },
    toggleEdit: (state, action) => {
        const todo = state.list.find((t) => t.id === action.payload);
        if (todo) {
            todo.edit = !todo.edit;
        }
    },
    deleteTodo: (state, action) => {
        state.list = state.list.filter((t) => t.id !== action.payload);
        saveTodosToStorage(state.list);
    },
    setFilter: (state, action) => {
        state.filter = action.payload;
    },
    loadFromStorage: (state) => {
        state.list = loadTodosFromStorage();
    },
};

export default reducers;
