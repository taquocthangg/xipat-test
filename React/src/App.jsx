import { ConfigProvider, theme } from 'antd';
import { App as AntdApp } from 'antd'; //
import { useEffect, useState } from 'react';
import TodoListPage from "./componets/todoList/TodoListPage.jsx";

import 'antd/dist/reset.css';
import './App.css'

function App() {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const custometheme = {
        algorithm: isDarkMode
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
    };


    return (
        <ConfigProvider theme={custometheme}>
            <AntdApp>
                <div
                    style={{
                        padding: 20,
                        minHeight: '100vh',
                        backgroundColor: isDarkMode ? '#141414' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#000000',
                        transition: 'all 0.3s ease',
                    }}
                >
                    <TodoListPage setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
                </div>
            </AntdApp>
        </ConfigProvider>
    );
}

export default App;