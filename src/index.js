// step2 修改前
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// step2 修改后
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import * as ReactDOM from 'react-dom/index';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    // StrictMode 严格模式的作用：1识别不安全的生命周期；2检测意外的副作用
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
