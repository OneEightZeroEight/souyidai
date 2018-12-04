import React, { Component } from 'react';

class Logo extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {	
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
	
  render() {
    return (
		<div className={this.state.add===true?"huli-head cf white":"huli-head cf"} style={{backgroundColor: this.state.add===true?"#fff":"rgba(104, 138, 240, 0)"}}><a href="index.html" className="syd-logo lt"> </a>
			<div className="right-box rt">
				<div className="regist-login lt"><span><a href="index.html">登录</a><a href="index.html">/</a><a href="index.html">注册</a></span>
					<span style={{display: "none"}}><a href="index.html" className="mr10"> </a><i className="arrow-close"></i>
						<div className="layerPort" style={{display:"none"}}>
							安全退出
						</div>
					</span>
				</div> 
				<a href="https://events.souyidai.com/static/appGeneralize/index.html" className="download lt">下载APP</a>
			</div>
		</div>
    );
  }
}

export default Logo;
