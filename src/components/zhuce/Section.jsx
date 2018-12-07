import React, { Component } from 'react';
//没有withRouter则无法跳转路由
import { withRouter   } from 'react-router-dom'
import {connect} from 'react-redux';
class Section extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			xieyi:true,
			panduan:'wu',
			zhanghaos:15078908061,
			yzm:123
		}
	}

	xieyi(){
		this.setState({
			xieyi:!this.state.xieyi
		})
	}
	
	xiayibu(){
		var phone = this.refs.phone.value;
		var mimas = this.refs.mimas.value;
		if(this.state.xieyi===false){
			if(!(/^1[34578]\d{9}$/.test(phone))){
				this.setState({
					panduan:'cuowu'
				})
			}else if(phone == this.state.zhanghaos){
				this.setState({
					panduan:'cunzai'
				})
				return;
			}else if(phone != this.state.zhanghaos){
				if(mimas != this.state.yzm){
					this.setState({
						panduan:'yzm'
					})
					return;
				}else if(mimas == this.state.yzm){
					this.setState({
						panduan:'wu'
					})
					this.props.chuancan(phone);
					this.props.history.push('/info')
				}else{
					this.setState({
						panduan:'wu'
					})
				}
			}
		}else{
			console.log("未同意协议")
		}
		
	}
  render() {
		return (
			<div  className="section register">
				<ul  className="login-info mt130">
					<li  className="btLine oneIcon"><input ref="phone" type="text" placeholder="输入您的手机号" /> <i
						  className="icon-clear"></i></li>
					<li  id="registerValiNum" className="btLine db-icon"><input ref="mimas" type="text" placeholder="输入验证码" />
						<img  src="https://passport.souyidai.com/connect/passimage.jpg?t=0.909957868697" alt="" /></li>
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
									console.log(this.state.panduan)
									return (
										<p style={{color: "#ff5757"}}>手机号码有误，请重填 </p>
									)
								}else if(this.state.panduan == "cunzai"){
									return (
										<p style={{color: "#ff5757"}}>手机号码已注册 </p>
									)
								}else if(this.state.panduan == "yzm"){
									return (
										<p style={{color: "#ff5757"}}>验证码有误 </p>
									)
								}else{console.log(this.state.panduan,"Section,this.state.zhanghaos取值无效")}
							})()
						}
					</li>
				</ul>
				<div className="btn-sure"><a onClick={this.xiayibu.bind(this)} href="javascript:;" className={this.state.xieyi?"disable":""}>下一步</a></div>
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
	
		
