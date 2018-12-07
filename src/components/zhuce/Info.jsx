import React, { Component } from 'react';
// import { withRouter   } from 'react-router-dom'
import {connect} from 'react-redux';
class Info extends Component {
	constructor(props){
		super(props)
		this.props = props;
		console.log(props)
		this.state = {
			yanjing:true
		}
	}
	fangfa(){
		this.props.history.push('/zhuce')
	}
	yanjing(){
		this.setState({
			yanjing:!this.state.yanjing
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
						<li className="userTel"><label>当前账户：</label> <span>{this.props.phone}</span>
							<a href="javascript:;" className="link-blue">修改</a></li>
					</ul>
					<ul className="login-info">
						<li className="btLine db-icon"><input type="text" placeholder="输入短信验证码" /> <a href="javascript:;" className="link-blue rt"
							 style={{display: "none"}}>点击获取</a> <a href="javascript:;" className="link-blue rt disabled" style={{}}>61S</a></li>
						<li className="btLine oneIcon"><input type={this.state.yanjing?"password":"test"} placeholder="设置8-20位密码" id="registerVali" />
							<i onClick={this.yanjing.bind(this)} className={this.state.yanjing?"icon-close-eye":"icon-open-eye"}></i></li>
					</ul>
					<ul className="login-info">
						<li className="promptText">
							<p></p>
						</li>
					</ul>
					<div className="passport-strength" style={{display: "none"}}>
						<div className="arrow"></div>
						<div className="require-lists">
							<div className="require-details cf"><span className="password-images"></span>
								<p>登录密码为8-20个字符</p>
							</div>
							<div className="require-details cf"><span className="password-images"></span>
								<p>必须包含大写或小写英文字母</p>
							</div>
							<div className="require-details cf"><span className="password-images"></span>
								<p>至少1个数字</p>
							</div>
							<div className="require-details cf" style={{display: "none"}}><span className="password-images"></span>
								<p>至少1个特殊字符</p>
							</div>
						</div>
					</div>
					<div className="btn-sure"><a href="javascript:;">注册</a></div>
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
			xiayibu(){
				
				dispatch({
					
				})
			}
		}
	})(Info);
