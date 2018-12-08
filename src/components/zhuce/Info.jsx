import React, { Component } from 'react';
import { withRouter   } from 'react-router-dom'
import {connect} from 'react-redux';
//jquery引入
import $ from 'jquery';
class Info extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			yanjing:true,
			count:120,
			chuxian:false,
			zishu:false,
			zimu:false,
			shuzi:false
		}
	}
	componentDidMount(){
		this.jishi();
	}
	//提示判断
	shezhi(){
		var shezhis = this.refs.shezhis.value;
		if(!shezhis==""){
			if((!/^[a-zA-Z0-9]{0,7}$/.test(shezhis))){
				this.setState({
						zishu: true
				})
			}else{
				this.setState({
						zishu: false
				})
			}
			if((!/^[a-zA-Z]{1,}$/.test(shezhis))){
				this.setState({
						zimu: true
				})
			}else{
				this.setState({
						zimu: false
				})
			}
			if((!/^\d{1,}$/.test(shezhis))){
				this.setState({
						shuzi: true
				})
			}else{
				this.setState({
						shuzi: false
				})
			}
		}else{
			this.setState({
					zishu:false,
					zimu:false,
					shuzi:false
			})
		}
	}
	//获取密码
	zhuce(){
		var shezhis = this.refs.shezhis.value;
		if((!/^[a-zA-Z0-9]{0,7}$/.test(shezhis))){
			console.log("字数合格")
			if((!/^[a-zA-Z]{1,}$/.test(shezhis))){
				console.log("字母合格")
				if((!/^\d{1,}$/.test(shezhis))){
					console.log("数字合格")
					console.log("注册成功")
					this.houtai();
					this.props.chuancans();
					this.props.history.push('/home')
				}else{
					console.log("没有字母")
				}
			}else{
				console.log("没有数字")
			}
		}else{
			console.log("不够八位数")
		}
	}
	
	//获得焦点
	huode(){
		this.setState({
				chuxian: true
		})
	}
	//失去焦点
	shiqu(){
		this.setState({
				chuxian: false
		})
	}
	
	jishi(){
			let count = this.state.count;
			const timer = setInterval(() => {
				this.setState({
						count: count--
				})
				if (count < 0) {
					clearInterval(timer);
				}
			}, 1000);
			
	}
	
	fangfa(){
		this.props.history.push('/zhuce')
	}
	yanjing(){
		this.setState({
			yanjing:!this.state.yanjing
		})
	}
	fanhui(){
		this.props.history.push('/zhuce')
	}
	//注册存数据库
	houtai(){
		var rootPath = 'http://localhost:4000'
		var mima = this.refs.shezhis.value;
		var zhanghao = localStorage.getItem("phone")
		var url=rootPath+'/Login/addGoods'
		var data={
			phone:zhanghao,
			name:mima
		}
		$.post(url,data,function(res){
			if(res.err == 0){
				console.log(res)
			}else{
				//提示重新填写
				alert("上传失败请重试")
			}
		})
	}
	
  render() {
		return (
			<div className="info">
				<div className="foxM-login">
					<i onClick={this.fangfa.bind(this)} className="icon-gray-return"></i>
					<h2 className="title">快速注册</h2>
				</div>
				<div className="section">
					<ul className="login-info">
						<li className="userTel"><label>当前账户：</label> <span>{localStorage.getItem("phone")}</span>
							<a onClick={this.fanhui.bind(this)} href="javascript:;" className="link-blue">修改</a></li>
					</ul>
					<ul className="login-info">
						<li className="btLine db-icon"><input type="text" placeholder="输入短信验证码" /> 
							{
								(() =>{
									if(this.state.count > 0){
										return (
											<a href="javascript:;" className="link-blue rt disabled" style={{}}>{this.state.count}S</a>
										)
									}else if(this.state.count === 0){
										return (
											<a href="javascript:;" className="link-blue rt">点击获取</a> 
										)
									}
								})()
							}
						</li>
						<li className="btLine oneIcon"><input onFocus={this.huode.bind(this)} onBlur={this.shiqu.bind(this)} onChange={this.shezhi.bind(this)} ref="shezhis" type={this.state.yanjing?"password":"test"} placeholder="设置8-20位密码" id="registerVali" />
							<i onClick={this.yanjing.bind(this)} className={this.state.yanjing?"icon-close-eye":"icon-open-eye"}></i></li>
					</ul>
					<ul className="login-info">
						<li className="promptText">
							<p></p>
						</li>
					</ul>
					<div className="passport-strength" style={{"display": this.state.chuxian?"block":"none"}}>
						<div className="arrow"></div>
						<div className="require-lists">
							<div className={this.state.zishu?"require-details cf success":"require-details cf"}><span className="password-images"></span>
								<p>登录密码为8-20个字符</p>
							</div>
							<div className={this.state.shuzi?"require-details cf success":"require-details cf"}><span className="password-images"></span>
								<p>必须包含大写或小写英文字母</p>
							</div>
							<div className={this.state.zimu?"require-details cf success":"require-details cf"}><span className="password-images"></span>
								<p>至少1个数字</p>
							</div>
							<div className="require-details cf" style={{display: "none"}}><span className="password-images"></span>
								<p>至少1个特殊字符</p>
							</div>
						</div>
					</div>
					<div className="btn-sure"><a onClick={this.zhuce.bind(this)} href="javascript:;">注册</a></div>
				</div>
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
			chuancans(){
				dispatch({
					type:"chuancans",
					jemian:true
				})
			}
		}
	})(Info);
