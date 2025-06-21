import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './action/AddTodo';
import FiltersTodo from './action/FiltersTodo';
import TodoLists from './content/TodoLists';
import { useMemo, useEffect } from 'react';
import { loadFromStorage } from "../../redux/slice/todo/todoSlice.js";

const TodoListPage = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.list);
    const filter = useSelector((state) => state.todos.filter);
    const { isDarkMode } = props;

    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
            if (filter === 'completed') return todo.completed;
            if (filter === 'active') return !todo.completed;
            return true;
        });
    }, [todos, filter]);

    useEffect(() => {
        dispatch(loadFromStorage());
    }, [dispatch]);

    return (
        <div className={`todo-wrapper ${isDarkMode ? 'todo-dark' : 'todo-light'}`}>
            <AddTodo {...props} />
            <FiltersTodo />
            <TodoLists todos={filteredTodos} />
        </div>
    );
};

export default TodoListPage;
