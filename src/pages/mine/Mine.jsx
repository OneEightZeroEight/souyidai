import React, { Component } from 'react';

import {connect} from 'react-redux';

import Chacha from './Chacha.jsx';
import Login from './Login.jsx';
import FoxM from './FoxM.jsx';
import Logo from '../home/Logo.jsx';
import Dibu from '../../components/Dibu.jsx';
import Kaihu from './Kaihu.jsx';
import Content from './Content.jsx';

class Mine extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			
		}
	}
	componentDidMount(){
			this.props.navigateTo(2); 
	}
  render() {
		return (
			<div className="mine">
				{
					(() => {
						if(localStorage.getItem("phone") != null){
							return (
								<div  className="myCapital">
									<Logo></Logo>
									<Kaihu></Kaihu>
									<Content></Content>
									<Dibu></Dibu>
								</div>
							)
							
						}else{
							return (
								<div>
									<Chacha></Chacha>
									<Login></Login>
									<FoxM></FoxM>
								</div>
							)
						}
					})()
				}
				
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
	})(Mine);
