import {Checkbox, Tooltip} from 'antd';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../../redux/slice/todo/todoSlice';
import EditTodo from '../action/EditTodo';
import React from 'react';

const TodoContent = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <>
        <Tooltip title={todo.completed ? 'Chuyển trạng thái chưa hoàn thành' :"Chuyển trạng thái hoàn thành"}>
            <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                style={{ flex: 1 }}
            >
                {todo.edit ? (
                    <EditTodo.InputField todo={todo} />
                ) : (
                    <span
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                    >
                    {todo.name}
                </span>
                )}
            </Checkbox>
        </Tooltip>
        </>
    );
};

export default React.memo(TodoContent);
