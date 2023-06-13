import React, { useState, useEffect } from 'react';
import axios from 'axios';

// useEffect 由React提供，在函数组件内部调用

export default function UseEffectDemo() {
    const [data, setData] = useState({ hits: [] });

    // 第二个参数：
    // 无第二个参数，每次render都会执行副效应
    // 空数组，表示负效应只会在首次render的时候被执行
    // 有内容的数组，表示数组内的依赖有变化，那么副效应会在每次render的时候被执行
    useEffect(() => {
        console.log('useEffect ===>>>');
        const fetchData = async () => {
            const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');
            setData(result.data);
        }

        fetchData();
    }, []);

    useEffect(() => {
        document.title = 'title';
        return () => document.title = 'test title';
    }, [data]);
    return (
        <ul>
            {data.hits.map(item => {
                console.log(item);
                return (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                )
            })}
        </ul>
    );
}