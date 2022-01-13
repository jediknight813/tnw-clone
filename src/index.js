import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Ad from './components/Ad'
import Content from './components/Content'
import Footer from './components/Footer'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Ad />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


