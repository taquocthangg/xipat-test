import { List } from 'antd';
import EditTodo from '../action/EditTodo';
import RemoveTodo from '../action/RemoveTodo';
import TodoContent from './TodoContent';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionListItem = motion(List.Item);

const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
};

const TodoLists = ({ todos }) => {
    return (
        <List
            style={{ marginTop: 20 }}
            bordered
            dataSource={todos}
            renderItem={(item) => (
                <AnimatePresence mode="popLayout">
                    <MotionListItem
                        key={item.id}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.1 }}
                        actions={[
                            <EditTodo key={`edit-${item.id}`} todo={item} />,
                            <RemoveTodo key={`remove-${item.id}`} id={item.id} />,
                        ]}
                    >
                        <TodoContent todo={item} />
                    </MotionListItem>
                </AnimatePresence>
            )}
        />
    );
};

export default React.memo(TodoLists);
