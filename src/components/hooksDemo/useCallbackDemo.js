import { useCallback, useState, useEffect, memo } from 'react';

const ChildrenDemo = memo((props) => {
    return (
        <p>{props.text}</p>
    );
});

// useCallback的作用： lets you cache a function definition between re-renders.
export default function UseCallbackDemo() {
    const [text, setText] = useState('');
    const handlerClick = () => {
        console.log('click~~');
        setText('hello');
    }
    return (
        <div>
            <button onClick={handlerClick}>
                click me!!!
            </button>
            <ChildrenDemo text={text} />
        </div>
    );
};