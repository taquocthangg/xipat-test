import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';

import { Button, Space } from 'antd';
import { motion } from 'framer-motion';

import { setFilter } from '../../../redux/slice/todo/todoSlice';

const FiltersTodo = () => {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.todos.filter);

    const setAll = useCallback(() => dispatch(setFilter('all')), [dispatch]);
    const setActive = useCallback(() => dispatch(setFilter('active')), [dispatch]);
    const setCompleted = useCallback(() => dispatch(setFilter('completed')), [dispatch]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
        >
            <Space style={{ marginTop: 16 }}>
                <Button
                    type="default"
                    onClick={setAll}
                    style={{
                        backgroundColor: current === 'all' ? '#1677ff' : undefined,
                        borderColor: current === 'all' ? '#1677ff' : undefined,
                        color: current === 'all' ? '#ffffff' : '#1677ff',
                    }}
                >
                    Tất cả
                </Button>
                <Button
                    type="default"
                    onClick={setActive}
                    style={{
                        backgroundColor: current === 'active' ? '#faad14' : undefined,
                        borderColor: current === 'active' ? '#faad14' : undefined,
                        color: current === 'active' ? '#ffffff' : '#faad14',
                    }}
                >
                    Đang chờ xử lý
                </Button>
                <Button
                    type="default"
                    onClick={setCompleted}
                    style={{
                        backgroundColor: current === 'completed' ? '#52c41a' : undefined,
                        borderColor: current === 'completed' ? '#52c41a' : undefined,
                        color: current === 'completed' ? '#ffffff' : '#52c41a',
                    }}
                >
                    Đã hoàn thành
                </Button>
            </Space>
        </motion.div>
    );
};

export default React.memo(FiltersTodo);
