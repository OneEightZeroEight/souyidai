import React, { Component } from 'react';

class Chacha extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			hrty:'/home'
		}
	}
	fangfa(){
		console.log(666)
	}
  render() {
		return (
			<div className="chacha">
					<header className="foxM-login">
						<i onClick={this.fangfa.bind()} className="icon-gray-close"></i>
					</header>
			</div>
		);
  }
}

export default Chacha;
