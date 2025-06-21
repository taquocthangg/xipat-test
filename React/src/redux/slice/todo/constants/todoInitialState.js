import {fakeTodos} from "./data.js";

const initialState = {
    list: JSON.parse(localStorage.getItem('todos')) || fakeTodos,
    filter: 'all',
};

export default initialState;
