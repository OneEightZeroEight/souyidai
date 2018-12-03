import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router} from "react-router-dom";
	
import './styles/index.css';
import './styles/main01.css';
// import './styles/main.css';

import App from './App';
import * as serviceWorker from './lib/serviceWorker';

ReactDOM.render(
		<Router>
			<App></App>
		</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
