import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';



var pageStyle = {
  backgroundColor: '', 
  minHeight: '100%'
}

var footerStyle = {
  minWidth: '100%', 
  width: '100%'
}


const App = () => (
  <div style={pageStyle}>
    <Header />
    <Main />
    <Footer style={ footerStyle }/>

  </div>
);

render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
       document.getElementById('root'));
