import React, { Component } from 'react';
//没有withRouter则无法跳转路由
import { withRouter   } from 'react-router-dom'
import {connect} from 'react-redux';
//jquery引入
import $ from 'jquery';
import axios from 'axios';
class Section extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			xieyi:true,
			panduan:'wu',
			zhanghaos:15078908061,
			yzm:123,
			code:"",
			jan:'jies'
			
		}
	}
	componentWillMount(){
		this.createCode();
	}
// 	componentDidMount(){
// 		this.jishi();
// 	}
	createCode(){
	
		let a = "";
		// this.refs.code.innerHTML=""
			// this.state.code = '';
			//设置长度，这里看需求，我这里设置了4
			var codeLength = 4;
			//设置随机字符
			var random = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r', 's','t','u','v','w','x','y','z');
			//循环codeLength 我设置的4就是循环4次
			for(var i = 0; i < codeLength; i++){
					//设置随机数范围,这设置为0 ~ 36
					var index = Math.floor(Math.random()*36);
					//字符串拼接 将每次随机的字符 进行拼接
					a += random[index]
					
			}
			this.setState({
				code:a
			})
	}

	xieyi(){
		this.setState({
			xieyi:!this.state.xieyi
		})
	}
	fanhui(){
		this.props.history.push('/mine')
	}
	xiayibu(){
		var phone = this.refs.phone.value;
		var mimas = this.refs.mimas.value;
		if(this.state.xieyi===false){
			this.haoma();
			if(!(/^1[34578]\d{9}$/.test(phone))){
				this.setState({
					panduan:'cuowu'
				})
			}else if(this.state.jian == -1){
				this.setState({
					panduan:'cunzai'
				})
				return;
			}else if(phone != ''){
				if(mimas != this.state.code){
					this.setState({
						panduan:'yzm'
					})
					return;
				}else if(mimas == this.state.code){
					this.setState({
						panduan:'wu'
					})
					this.props.chuancan(phone);
					localStorage.setItem("phone",phone);
					this.props.history.push('/info')
				}else{
					this.setState({
						panduan:'wu'
					})
				}
			}else{
				this.setState({
					panduan:'wus'
				})
			}
		}else{
			console.log("未同意协议")
		}
		
	}
	
	shua(){
		this.createCode();
	}
	kong(){
		this.refs.phone.value="";
	}
	//监听号码
// 	haomaw(){
// 		console.log(this.refs.phone.value)
 // onChange={this.haomaw.bind(this)} 
// 		
// }
//后端交互判断手机号码存在与否
	haoma(){
		var phone = this.refs.phone.value;
		var rootPath = 'http://localhost:4000'
		var url=rootPath+'/Login/findGoods';
		$.post(url,{phone:phone},(res) => {
			if(res.err ==0){
				console.log("号码过关")
			}else if(res.err == -1){
				this.setState({
					panduan:'-1'
				})
			}
		})
	}
  render() {
		return (
			<div className="section">
				<div  className="section register">
					<ul  className="login-info mt130">
						<li  className="btLine oneIcon"><input ref="phone" type="text" placeholder="输入您的手机号" /> <i onClick={this.kong.bind(this)}
								className="icon-clear"></i></li>
						<li  id="registerValiNum" className="btLine db-icon"><input ref="mimas" type="text" placeholder="输入验证码" />
							<span ref="code" onClick={this.shua.bind(this)} className="yanz">
								{this.state.code}
								</span></li>
					</ul>
					<p className="layer-gray-prompt"><i onClick={this.xieyi.bind(this)} className={this.state.xieyi?"icon-checkout":"icon-check"}></i>
						我已阅读并同意
						<a href="https://events.souyidai.com/static/web/agree/regist-service.html" className="link-blue">《搜易贷网站注册服务协议》</a>
						<a href="https://events.souyidai.com/static/web/agree/riskdisclosure.html" className="link-blue">《网络借贷风险和禁止性行为提示确认函》</a></p>
					<ul className="login-info">
						<li className="promptText">
							{
								(()=> {
									if(this.state.panduan == "wu"){
										return (
											<p>&nbsp;</p>
										)
									}else if(this.state.panduan == "cuowu"){
										return (
											<p style={{color: "#ff5757"}}>手机号码有误，请重填 </p>
										)
									}else if(this.state.panduan == "-1"){
										return (
											<p style={{color: "#ff5757"}}>手机号码已注册 </p>
										)
									}else if(this.state.panduan == "yzm"){
										return (
											<p style={{color: "#ff5757"}}>验证码有误 </p>
										)
									}else if(this.state.panduan == "wus"){
										return (
											<p style={{color: "#ff5757"}}>号码不能未空 </p>
										)
									}else{console.log(this.state.panduan,"Section,this.state.zhanghaos取值无效")}
								})()
							}
						</li>
					</ul>
					<div className="btn-sure"><a onClick={this.xiayibu.bind(this)} href="javascript:;" className={this.state.xieyi?"disable":""}>下一步</a></div>
				</div>
				<div className="foxM-login-footer">
					<p className="text">已有账号<a onClick={this.fanhui.bind(this)} href="javascript:;" style={{marginLeft: "0.5em"}}>立即登录</a></p>
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
			chuancan(phone){
				dispatch({
					type:"chuancan",
					phone:phone
				})
			}
		}
	})(Section)
);
	
		
