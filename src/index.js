import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Ad from './components/Ad'
import Content from './components/Content'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Ad />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);


