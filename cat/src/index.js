import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './router'
import axios from './utils/axios'
import {Provider} from 'react-redux'
// provider将store对象挂在根组件的context上
import Store from './store/store'
// import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <RootRouter/>
  </Provider>
, document.getElementById('root'));
Component.prototype.$axios = axios
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
