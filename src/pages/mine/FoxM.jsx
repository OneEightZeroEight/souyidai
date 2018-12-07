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
		this.props.history.push('/zhuce')
	}
  render() {
		return (
			<div className="foxM-login-footer" style={{zIndex: "4"}}>
				<a href="javasrcipt:;">找回密码／激活账户</a> 
				<a href="javasrcipt:;" onClick={this.fangfa.bind(this)}>快速注册</a>
			</div>
		);
  }
}

export default withRouter(FoxM);
