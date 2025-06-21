import {useDispatch} from 'react-redux';
import {useState} from 'react';

import {Button, Input, Tooltip} from 'antd';

import {FaRegEdit} from "react-icons/fa";
import {MdOutlineFileDownloadDone} from "react-icons/md";

import {editTodo, toggleEdit} from '../../../redux/slice/todo/todoSlice';

const EditTodo = ({todo}) => {
    const dispatch = useDispatch();
    const handleToggleEdit = () => {
        dispatch(toggleEdit(todo.id));
    };
    return (
        <Button
            size="small"
            type="text"
            onClick={handleToggleEdit}
        >
            {todo.edit ? (
                <Tooltip title={'Hoàn thành'}>
                    <MdOutlineFileDownloadDone/>
                </Tooltip>
            ) : (
                <Tooltip title={'Chỉnh sửa công việc'}>
                    <FaRegEdit/>
                </Tooltip>
            )}
        </Button>
    );
};

const InputField = ({todo}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(todo.name);

    const handleEdit = () => {
        if (value.trim() && value.trim() !== todo.name.trim()) {
            dispatch(editTodo({id: todo.id, name: value.trim()}));
        }
        dispatch(toggleEdit(todo.id));
    };

    return (
        <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onPressEnter={handleEdit}
            onBlur={handleEdit}
            autoFocus
            size="middle"
        />
    );
};

EditTodo.InputField = InputField;
export default EditTodo;
