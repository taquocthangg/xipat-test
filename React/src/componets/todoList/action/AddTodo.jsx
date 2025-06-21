import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import { Input, App, Tooltip, Form } from 'antd';
import { motion } from 'framer-motion';

import { addTodo } from '../../../redux/slice/todo/todoSlice';

import { FiSun, FiMoon } from 'react-icons/fi';

const AddTodo = ({ setIsDarkMode, isDarkMode }) => {
    const todos = useSelector((state) => state.todos.list);
    const dispatch = useDispatch();
    const { message } = App.useApp();
    const [form] = Form.useForm();

    const handleFinish = useCallback(
        ({ todo }) => {
            const name = todo.trim();
            if (!name) return;

            const isDuplicate = todos.some(
                (t) => t.name.trim().toLowerCase() === name.toLowerCase()
            );

            if (isDuplicate) {
                message.error('Todo này đã tồn tại!', 2);
                form.resetFields();
                return;
            }

            dispatch(addTodo(name));
            form.resetFields();
        },
        [todos, dispatch, form, message]
    );

    return (
        <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                whileTap={{ rotate: 90, scale: 1.2 }}
                style={{ cursor: 'pointer', fontSize: 20 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                <Tooltip title={isDarkMode ? 'Giao diện sáng' : 'Giao diện tối'} placement="bottom">
                    {isDarkMode ? <FiSun /> : <FiMoon />}
                </Tooltip>
            </motion.div>

            <Form form={form} onFinish={handleFinish} style={{ flex: 1 }}>
                <Form.Item
                    name="todo"
                    rules={[
                        { required: true, message: 'Vui lòng nhập công việc' },
                        { whitespace: true, message: 'Không được chỉ nhập khoảng trắng' },
                    ]}
                    style={{ marginBottom: 0 }}
                >
                    <Input.Search
                        placeholder="Thêm công việc"
                        enterButton="Thêm"
                        allowClear
                        onSearch={() => form.submit()}
                    />
                </Form.Item>
            </Form>
        </motion.div>

    );
};

export default AddTodo;
