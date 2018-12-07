import React, { Component } from 'react';
import { withRouter   } from 'react-router-dom'

class Chacha extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			hrty:'/home'
		}
	}
	fangfa(){
		this.props.history.push('/home')
		console.log(666)
	}
  render() {
		return (
			<div className="chacha">
					<header className="foxM-login">
						<i onClick={this.fangfa.bind(this)} className="icon-gray-close"></i>
					</header>
			</div>
		);
  }
}

export default withRouter(Chacha);
