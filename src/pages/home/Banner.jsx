import React, { Component } from 'react';
import { Carousel } from 'antd'
import  '../../assets/antd.css'
import a from '../../imgs/tim.jpg'
class Banner extends Component {
  render() {
    return (
		<div className="huli-regist-banner">
			<Carousel autoplay>
				<div ><img src={a} width="320"/></div>
				<div ><img src={a} width="320"/></div>
				<div ><img src={a} width="320"/></div>

			</Carousel>
		</div>
    );
  }
}

export default Banner;
