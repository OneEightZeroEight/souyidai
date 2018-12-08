import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
class Dibu extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			navn:[{
				title:"首页",
				href:"/home",
				classna:"router-link-exact-active",
				tubiao:"icon-home"
			},{
				title:"网贷项目",
				href:"/project/xzt",
				classna:"icon-chart",
				tubiao:"icon-chart"
			},{
				title:"我的账户",
				href:"/mine",
				classna:"icon-capital",
				tubiao:"icon-capital"
			}]
		}
	}
	
  render() {
    return (
      <div className="dibu">
        	<footer className="bt-nav">
        		<ul>
							{
								(() => {
									return this.state.navn.map((item,index)=>{
										return (
											<Link to={{pathname:item.href}} replace key={index}>
												<li
												onClick={this.props.navigateTo.bind(this,index)}
												className={item.classna}
												className={index === this.props.nav?"active":""}
												key={index}>
													<i className={item.tubiao}></i>
													<span>{item.title}</span>
												</li>
											</Link>
										)
									})
								})()
							}
        		</ul>
        	</footer>
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
	})(Dibu)

