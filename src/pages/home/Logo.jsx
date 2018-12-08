import React, { Component } from 'react';
//跳转路由
import { withRouter   } from 'react-router-dom'
import {connect} from 'react-redux';
class Logo extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {	
			tuichu:false,
			distance:100,
			add:false
		}
	}
	
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this));	
  }
    
  handleScroll(){
		if(window.scrollY>=100){
			this.setState({
				add:true
			})
		}else if(window.scrollY<100){
			this.setState({
				add:false
			})
		}
  }
	denglu(){
		this.props.history.push('/mine')
		
	}
	zhuce(){
		this.props.history.push('/zhuce')
	}
	//点击出现
	tuichu(){
		this.setState({
			tuichu:!this.state.tuichu
		})
	}
	//删除退出账号
	shanchu(){
		localStorage.removeItem('phone');
		this.setState({
			tuichu:false
		})
		this.props.chuancans();
	}
  render() {
    return (
		<div className={this.state.add===true?"huli-head cf white":"huli-head cf"} style={{backgroundColor: this.state.add===true?"#fff":"rgba(104, 138, 240, 0)"}}><a href="index.html" className="syd-logo lt"> </a>
			<div className="right-box rt">
				<div className="regist-login lt">
					{
						(() => {
							if(localStorage.getItem("phone") != null){
								return (
									<span><a href="javascript:;" className="mr10">{localStorage.getItem("phone").substr(0,3)+"****"+localStorage.getItem("phone").substr(7)}</a>
										<i className="arrow-close fa-chevron-down" onClick={this.tuichu.bind(this)}>▼</i>
										<div className="layerPort" onClick={this.shanchu.bind(this)} style={{display: this.state.tuichu===true?"block":"none"}}>
											安全退出
										</div>
									</span>
									
								)
							}else{
								return (
									<span>
										<a onClick={this.denglu.bind(this)} href="javascript:;">登录</a>
										<a href="javascript:;">/</a><a onClick={this.zhuce.bind(this)} href="javascript:;">注册</a>
									</span>
								)
							}
						})()
					}
					
					
				</div> 
				<a href="javascript:;" className="download lt">下载APP</a>
			</div>
		</div>
    );
  }
}

export default withRouter(
	connect((state) => {
		//获取到仓库的state
		return state
	},(dispatch) => {
		//用dispatch触发仓库中的action
		return {
			chuancans(){
				dispatch({
					type:"chuancans",
					jemian:false
				})
			}
		}
	})(Logo)
);
