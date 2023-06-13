import * as ReactDOM from 'react-dom/index';
import React from "react";

// ReactDOM.createPortal 将组件放置到任何自己想放置的位置
// lets you render child components in a different part of the DOM tree.
export default function getCreatePortalResult() {
    return ReactDOM.createPortal((<h2>hello createPortal</h2>), document.getElementById('root2'));
}