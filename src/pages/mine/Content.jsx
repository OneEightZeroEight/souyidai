import React, { Component } from 'react';

class Content extends Component {
	constructor(props){
		super(props)
		this.props = props;
		this.state = {
			
		}
	}
	
  render() {
		return (
			<div className="sectionContent">
				<div className="content1">
					<div className="contentLeft">
						<p className="allMoneyText">可用余额(元)</p>
						<div>
							<p className="allMoneyMoney">0.00</p>
						</div>
					</div>
					<div className="contentRight">
						<p className="enchashment">取现</p>
						<p className="recharge">充值</p>
					</div>
				</div>
				<div className="my-wellfare">
					<div className="lineItem">
						<div className="left-icon"><span className="leftIcon"></span></div>
						<div className="my-wel-right">
							<div className="title">我的福利</div>
							<div className="wellfare-count-info">暂无可用卡券</div>
						</div>
					</div>
					<div className="lineItem">
						<div className="left-icon"><span className="rightIcon"></span></div>
						<div className="my-wel-right">
							<div className="title">积分商城</div>
							<div className="wellfare-count-info">80狐狸积分可用</div>
						</div>
					</div>
				</div>
				<div className="content2">
					<div className="lineItem myMoneyIcon"><i className="leftIcon"></i><span>我的资产</span><i className="rightIcon"></i></div>
					<div className="lineItem monthbill"><i className="leftIcon"></i><span>收益账单</span><i className="rightIcon"></i></div>
					<div className="lineItem lendIcon"><i className="leftIcon"></i><span>出借项目</span><i className="rightIcon"></i></div>
					<div className="lineItem bidIcon"><i className="leftIcon"></i><span>投标工具</span><i className="rightIcon"></i></div>
					<div className="lineItem phoneIcon"><i className="leftIcon"></i><span>修改预留手机号</span><i className="rightIcon"></i></div>
					<div className="lineItem bankCardIcon"><i className="leftIcon"></i><span>绑定银行卡</span><i className="rightIcon"></i></div>
					<div className="lineItem exchangePassword"><i className="leftIcon"></i><span>修改存管交易密码</span><i className="rightIcon"></i></div>
					<div className="lineItem resetPassword"><i className="leftIcon"></i><span>重置存管交易密码</span><i className="rightIcon"></i></div>
					<div className="lineItem riskAssess"><i className="leftIcon"></i><span>风险评估</span><span className="riskResult">进取型</span>
						<i className="rightIcon"></i></div>
				</div>
			</div>
		)
  }
}

export default Content;
