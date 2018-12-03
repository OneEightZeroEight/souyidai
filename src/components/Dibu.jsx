import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Dibu extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			nav:0,
			navn:[{
				title:"首页",
				href:"/home",
				classna:"router-link-exact-active",
				tubiao:"icon-home"
			},{
				title:"网贷项目",
				href:"/project",
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
	
	navigateTo(index,e){
		this.setState({
			nav:index
		})
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
												onClick={this.navigateTo.bind(this,index)}
												className={item.classna}
												className={index === this.state.nav?"active":""}>
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

export default Dibu;
