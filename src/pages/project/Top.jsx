import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Mine extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			nav:0,
			navn:[{
				title:"直投项目",
				href:"/project/direct",
			},{
				title:"慧投",
				href:"/project/huitou",
			},{
				title:"转让项目",
				href:"/project/transfer",
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
			<div className="mine">
				<ul className="fina-tabs column-3">
					{
						(()=>{
							return this.state.navn.map((item,index)=>{
								return (
									<Link to={{pathname:item.href}} replace key={index}>
										<li
										onClick={this.navigateTo.bind(this,index)}
										key={index}
										className={index === this.state.nav?"router-link-exact-active active":""}>
											{item.title}
										</li>
									</Link>
									
								)
							})
						})()
					}
				</ul>
			</div>
		);
  }
}

export default Mine;
