import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 	
import { HashRouter as Router} from "react-router-dom";
	
import './styles/index.css';
import './styles/main01.css';

// 状态管理 配置store的
import { createStore } from 'redux'
// 把上面配置好的store和react进行关联
import {Provider} from 'react-redux'

import App from './App';
import * as serviceWorker from './lib/serviceWorker';

const store = createStore((state = {
   listNavIndex : 0,
	 phone:'',
	 jemian:false

}, action) => {
    switch (action.type) {
        case 'toggleNavIndex':
            return {
                ...state,
                listNavIndex:action.index
            }
        case 'toggleGallery':
            return {
                ...state,
                isShowGallery:action.isShowGallery
            }
				case 'chuancan':
						return {
								...state,
								phone:action.phone
						}
				case 'chuancans':
						return {
								...state,
								jemian:action.jemian
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
