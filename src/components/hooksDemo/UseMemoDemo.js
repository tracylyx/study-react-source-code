import React, { useMemo } from 'react';

function createTodos() {
    const todos = [];
    for (let i = 0; i < 50; i++) {
        todos.push({
            id: i,
            text: "Todo " + (i + 1),
            completed: Math.random() > 0.5
        });
    }
    return todos;
}

export default function UseMemoDemo() {
    // const todosOrigin = createTodos();
    // cache the return of calculation between re-render（缓存计算结果）
    const todos = useMemo(() => {
        return createTodos();
    }, []);
    return (
        <div>
            <h3>todo list</h3>
            <ul>
                {
                    todos.map((todo) => (<li>{todo.text}</li>))
                }
            </ul>
        </div>
    )
};