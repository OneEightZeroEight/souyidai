import React, { Component } from 'react';
import { Carousel } from 'antd'
import  '../../assets/antd.css'
import a from '../../imgs/1.png'
import b from '../../imgs/2.png'
import c from '../../imgs/3.png'
import d from '../../imgs/4.png'
class Banner extends Component {
  render() {
    return (
		<div className="huli-regist-banner">
			<Carousel autoplay>
				<div ><img src={a} width="320"/></div>
				<div ><img src={b} width="320"/></div>
				<div ><img src={c} width="320"/></div>
				<div ><img src={d} width="320"/></div>
			</Carousel>
		</div>
    );
  }
}

export default Banner;
