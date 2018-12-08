import React, { Component } from 'react';

class Kaihu extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			
		}
	}
	
  render() {
		return (
			<div className="bannerSection">
				<p className="openAccountTitle">开通存管账户，能尽早赚取收益</p>
				<div className="open-btns-box">
					<p className="openAccountBtn">存管开户</p>
				</div>
			</div>
		)
  }
}

export default Kaihu;
