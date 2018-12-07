import React, { Component } from 'react';
import Chacha from './Chacha.jsx';
import Login from './Login.jsx';
import FoxM from './FoxM.jsx';

class Mine extends Component {
  render() {
		return (
			<div className="mine">
				<Chacha></Chacha>
				<Login></Login>
				<FoxM></FoxM>
			</div>
		);
  }
}

export default Mine;
