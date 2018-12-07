import React, { Component } from 'react';
import { withRouter   } from 'react-router-dom'

class FoxM extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			
		}
	}
	fangfa(){
		this.props.history.push('/mine')
	}
  render() {
		return (
			<div className="foxM-login">
				<i onClick={this.fangfa.bind(this)} className="icon-gray-return"></i>
				<h2 className="title">快速注册</h2>
			</div>
		);
  }
}

export default withRouter(FoxM);
