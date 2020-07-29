import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/style.scss';
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(

    //Provider կոմպոնենտը պետք է, որպեսզի store ֊ ը  հասանելի լինի բոլոր կոմպոնենտներին․
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);