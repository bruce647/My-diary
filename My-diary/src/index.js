import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from '../src/style.js'
import IconlStyle from './static/iconfont/iconfont.js'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <IconlStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
