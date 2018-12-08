import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 
import 'antd-mobile/dist/antd-mobile.css';	
import { HashRouter as Router} from "react-router-dom";

import './styles/index.css';

import './styles/main01.css';
import './styles/main.css';

// 状态管理 配置store的
import { createStore } from 'redux'
// 把上面配置好的store和react进行关联
import {Provider} from 'react-redux'

import App from './App';
import * as serviceWorker from './lib/serviceWorker';

const store = createStore((state = {
   listNavIndex : 0,
   xq_init : {id:3382960343703,type:'ztb',title:'企业借款 XWPH18WLUL',amount:'890000'},
   tanchuangShow: false,
   phone: false 


}, action) => {
    switch (action.type) {
        case 'toggleNavIndex':
            return {
                ...state,
                listNavIndex:action.index
            }
        case 'changeXq':
            return {
                ...state,
                xq_init : action.obj
            }
        case 'toggleTc':
            return {
                ...state,
                tanchuangShow : action.value
        }    
        case 'notodo':
            return state
            
		case 'chuancan':
			return {
					...state,
					phone:action.phone
                    }
                    
        default:
            return state
    }
})





ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App></App>
		</Router>
	</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
