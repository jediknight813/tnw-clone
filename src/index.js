import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import HeaderConference from './components/HeaderConference'
import Content from './components/Content'
import Footer from './components/Footer'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HeaderConference />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


