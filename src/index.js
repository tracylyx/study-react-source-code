// step2 修改前
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// step2 修改后
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import * as ReactDOM from 'react-dom/index';
import './index.css';
import App from './App';
import createPortalDemo from './components/createPortalDemo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
	  {
          createPortalDemo()
	  }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
