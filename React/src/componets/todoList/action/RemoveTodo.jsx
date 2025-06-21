import { useDispatch } from 'react-redux';

import { Button, Tooltip, Popconfirm } from 'antd';

import { deleteTodo } from '../../../redux/slice/todo/todoSlice';

import { MdOutlineDelete } from 'react-icons/md';

const RemoveTodo = ({ id }) => {
    const dispatch = useDispatch();

    const confirmDelete = () => {
        dispatch(deleteTodo(id));
    };

    return (
        <Popconfirm
            title="Bạn có chắc muốn xóa?"
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={confirmDelete}
        >
            <Tooltip title="Xóa công việc" placement="left" >
                <Button danger size="small" type="text">
                    <MdOutlineDelete />
                </Button>
            </Tooltip>
        </Popconfirm>
    );
};

export default RemoveTodo;
