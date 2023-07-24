import React, { useState, useEffect } from 'react';
import axios from 'axios';

// useEffect 由React提供，在函数组件内部调用

export default function UseEffectDemo() {
    const [data, setData] = useState({ hits: [] });

    // useEffect第一个参数是一个函数
    // 第一个参数返回一个函数，为清理函数————cleanup function

    // 第二个参数(依赖项，其内部有变化，就会触发useEffect第一个参数执行)：
    // 无第二个参数，每次render都会执行副效应
    // 空数组，表示负效应只会在首次render的时候被执行
    // 有内容的数组，表示数组内的依赖有变化，那么副效应会在每次render的时候被执行

    // 返回值：undefined
    useEffect(() => {
        console.log('useEffect fetch ===>>>');
        return async () => {
            const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');
            setData(result.data);
        }

        // fetchData();
    }, []);

    useEffect(() => {
        console.log('useEffect title ===>>>')
        document.title = 'title';
        // 依赖项变更，触发re-render 或 组件卸载的时候执行return的函数
        return () => {
            console.log('useEffect return ===>>>')
            return document.title = 'test title';
        };
    }, []);

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