import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
		<div>
			{
				(() => {
						if(localStorage.getItem("phone") != null){
							return (
								<div className="goDownload">
									<a href="https://events.souyidai.com/static/appGeneralize/index.html" className="download-btn">立即下载</a>
								</div>
							)
						}else{
							return (
								<div className="regist-white-bac">
									<div className="overflow-hidden">
										<div className="regist-center-contain">
											<div className="regist-input-box" style={{display: "block"}}>
												<p className="regist-input-title">立即注册</p>
												<div className="input-contain"><input type="text" placeholder="请输入您的手机号" id="username" /></div>
												<div className="input-contain image-code"><input type="text" placeholder="请输入图片验证码" />
													<div className="right-contain cf"><img src="https://m.souyidai.com/connect/passimage.jpg?t=0.5839655751737003" alt="" /> <a href="index.html"
														className="refresh"> </a></div>
												</div>
												<p className="error-text"></p> <input type="button" value="注册立享专属福利" className="regist-btn regist-stept1" />
											</div>
											
											<div className="regist-input-box regist-input-box2">
												<div className="top-text"><span></span> <a href="index.html" className="change-num">修改</a> <em>申请注册搜易贷账号</em></div>
												<div className="input-contain image-code"><input type="number" placeholder="请输入短信验证码" />
													<div className="right-contain"><a href="index.html" className="again">发送验证码</a> <a href="index.html" className="again disabled" style={{display: "none"}}>120S</a></div>
												</div>
												<div className="input-contain image-code"><input type="password" placeholder="设置登录密码" />
													<a href="index.html" className="open-eyes close"> </a></div>
												<p className="error-text"></p> <input type="button" value="确认" className="regist-btn regist-stept2" style={{opacity: "0.7"}} />
												<p className="agree-xieyi"><i className="icon-checkout"></i>
													我已阅读并同意
													<a href="https://events.souyidai.com/static/web/agree/regist-service.html" >《网站注册服务协议》</a>
													<a href="https://events.souyidai.com/static/web/agree/riskdisclosure.html" className="link-blue">《网络借贷风险和禁止性行为提示确认函》</a></p>
											</div>
										</div>
									</div>
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
								</div>
							)
					}
				})()
			}
		</div>
    );
  }
}

export default Register;
