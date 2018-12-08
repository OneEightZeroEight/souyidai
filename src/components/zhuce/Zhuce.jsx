import React, { Component } from 'react';
import Top from './Top.jsx';
import Section from './Section.jsx';
import {connect} from 'react-redux';
// import FoxM from './FoxM.jsx';

class Zhuce extends Component {
	constructor(props){
			super(props);
			this.props = props;
			this.state = {
				
			}
	}
	
  render() {
		return (
			<div className="zhuce">
				<Top></Top>
				<Section></Section>
				
			</div>
		);
  }
}

export default connect((state) => {
		//获取到仓库的state
		return state
	},(dispatch) => {
		//用dispatch触发仓库中的action
		return {
			
		}
	})(Zhuce);
