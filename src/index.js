import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'; 
//under react
import store from "./store";
// react part

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App/>
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// react part
//pass store as a prop in provider store={store}