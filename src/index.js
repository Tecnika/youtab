import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/settings/reset.css'
import './css/settings/colors.css';
import './css/settings/default.css';
import './css/index.css';

import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
import Block from './components/templates/block';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      Hello
      <App />
      <div className='f_flex f_wrap'>
        <Block /> <Block /><Block />
      </div>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
