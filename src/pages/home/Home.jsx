import React, { Component } from 'react';

import Dibu from '../../components/Dibu.jsx';
import Logo from './Logo.jsx';
import Banner from './Banner.jsx';
import Register from './Register.jsx';
import Recommand from './Recommand.jsx';
import Advantages from './Advantage.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import Zhanwei from './zhanwei.jsx';
import {connect} from 'react-redux';
class Home extends Component {
	constructor(props){
			super(props);
			this.props = props;
			this.state = {
				
			}
	}
	componentDidMount(){
			this.props.navigateTo(0); 
	}
  render() {
    return (
		<div className="home">
			<Logo></Logo>
			<Banner></Banner>
			<Register></Register>
			<Recommand></Recommand>
			<Advantages></Advantages>
			<About></About>
			<Footer></Footer>
			<Zhanwei></Zhanwei>
			<Dibu></Dibu>
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
			navigateTo(index){
				dispatch({
					type:"navigateTo",
					nav:index
				})
			}
		}
	})(Home)
