import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
		<div className="huli-regist-banner">
			<div className="huli-banner huli-banner6 prev-right"></div>
			<div className="huli-banner huli-banner1 prev-right"></div>
			<div className="huli-banner huli-banner7 active-right"></div>
			<div className="huli-banner huli-banner4 next-right"></div>
			<ul className="banner-circle">
				<li className="current"></li>
				<li className=""></li>
				<li className=""></li>
				<li className=""></li>
			</ul>
		</div>
    );
  }
}

export default Banner;
