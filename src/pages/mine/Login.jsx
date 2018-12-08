import React, { Component } from 'react';
import { withRouter   } from 'react-router-dom'
import {connect} from 'react-redux';
import $ from 'jquery';
import axios from 'axios';
class Login extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			cishu:0,
			lefu:true,
			yanjing:true,
			zhanghao:'wu',
			chuans:'2'
		}
	}
	yanjing(){
		this.setState({
			yanjing:!this.state.yanjing
		})
	}
	denglu(){
		var zhanghao = this.refs.zhanghao.value;
		var mimas = this.refs.mimas.value;
		this.haoma();
		if(zhanghao == ''){
			this.setState({
				zhanghao:'cuowu'
			})
			return;
			
		}else if(zhanghao != ''){
			if(this.state.chuans == '1'){
				this.setState({
					zhanghao:'mima'
				})
				this.state.cishu+=1;
				if(this.state.cishu>=4){
					this.setState({
						zhanghao:'zhaohui',
						lefu:false
					})
					return;
				}
				return;
				
			}
			if(this.state.chuans == '-1'){
				this.setState({
					zhanghao:'meiyou'
				})
				return;
			}
			if(this.state.chuans == '0'){
				localStorage.setItem("phone",zhanghao);
				this.props.chuancans();
				this.props.history.push('/home')
				console.log(666)
			}
			
		}else{
			return;
		}
	}
	kong(){
		this.refs.mimas.value="";
	}
	haoma(){
		var zhanghao = this.refs.zhanghao.value;
		var mimas = this.refs.mimas.value;
		var rootPath = 'http://localhost:4000'
		var url=rootPath+'/Login/dengluGoods';
		var data = {
			phone:zhanghao,
			name:mimas
		}
		$.post(url,data,(res) => {
			if(res.err == 0){
				this.setState({
					chuans: '0'
				})
				console.log(res.err,"密码匹配")
				console.log(this.state.chuans)
			}else if(res.err == 1){
				this.setState({
					chuans: '1'
				})
				console.log(res.err,"密码不匹配")
				console.log(this.state.chuans)
			}else if(res.err == -1){
				this.setState({
					chuans: '-1'
				})
				console.log(res.err,"没有此账号")
				console.log(this.state.chuans)
			}
			
		})
	}
	
  render() {
		return (
			<div  className="section login">
				<div  className="login-img"><img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACOCAYAAAAPfYUjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowREY5QUIwNDRGODVFNjExOEI4MkVCRDAzOTkxNEUzRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTM3OEZCQkM2QzkxMUU2QkQxM0U1MEIwNDIwQTE5NiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTM3OEZCQUM2QzkxMUU2QkQxM0U1MEIwNDIwQTE5NiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmM4YTBmMDBmLWIwNzAtNDBlYS04ZDA2LWM1NDU4NjRmNWVkZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowREY5QUIwNDRGODVFNjExOEI4MkVCRDAzOTkxNEUzRSIvPiA8L3Jk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"
					 alt="" className="login-logo" /></div>
				<ul  className="login-info">
					<li  className="btLine userName">
						<input 
						type="text" 
						placeholder="手机号/昵称/邮箱（可用狐狸金服账户登录）" 
						ref="zhanghao"/>
					</li>
					<li  className="btLine userPwd"><input  type={this.state.yanjing?"password":"test"} ref="mimas" placeholder="登录密码" id="loginPwd" />
						<i onClick={this.kong.bind(this)} className="icon-clear"></i> <i onClick={this.yanjing.bind(this)} className={this.state.yanjing?"icon-close-eye":"icon-open-eye"}></i></li>
					<li  className="input-code-Box" style={{display: "none"}}>
						<div  className="input-code remove">
							<div  id="kaptcha" className="btLine kaptcha"><input  type="text" placeholder="请输入验证码" />
								<a href="index.html" className="auth-img"><img  src="/connect/passimage.jpg?t=0.9453470508794519"
									 alt="" /></a></div>
							<div id="shortMsg" className="btLine"><input  type="text" placeholder="请输入短信验证码" />
								<a href="index.html" className="shortMsg" style={{display: "none"}}>点击获取</a> <a href="index.html" className="shortMsg disabled">120S</a></div>
						</div>
					</li>
					<li className="promptText">
						{
							(()=> {
								if(this.state.zhanghao == 'wu'){
									return (
										<p>&nbsp;</p>
									)
								}else if(this.state.zhanghao == 'cuowu'){
									return (
										<p style={{color: "#ff5757"}}>用户名或者密码错误 </p>
									)
								}else if(this.state.zhanghao == 'mima'){
									return (
										<p style={{color: "#ff5757"}}>密码错误 <span style={{color: "#ff5757"}}>你还有{4-this.state.cishu}次机会 </span></p>
										
									)
								}else if(this.state.zhanghao == 'zhaohui'){
									return (
										<p style={{color: "#ff5757"}}>如您密码丢失请找回 </p>
									)
								}else if(this.state.zhanghao == 'meiyou'){
									return (
										<p style={{color: "#ff5757"}}>账号不存在 </p>
									)
								}else{console.log("Login,this.state.zhanghaos取值无效")}
							})()
						}
						
					</li>
				</ul>
				<div  className="btn-sure">
					<a className={this.state.lefu?"":"disable"} onClick={this.denglu.bind(this)}
					href="javascript:;">登录</a>
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
					jemian:true
				})
			}
		}
	})(Login)
);
