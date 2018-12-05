import React, { Component } from 'react';


class Recommand extends Component {
  render() {
    return (
		<div >
			<div  id="homelist" className="recommand">
				<h2  className="syd-title">新手专享</h2>
				<ul  className="foxM-info-group column-3">
					<li  className="btLine">
						<div  className="group-lt"><span  className="foxM-home-rate">9.88%</span> <span
							  className="font-gray">参考年化结算利率</span></div>
						<div  className="group-md syd-group-md">
		
							<div  className="groupL-bt"><span  style={{borderCcolor: "rgb(254, 78, 61)",color: "rgb(254, 78, 61)"}}>专属福利</span><span
								  style={{borderColor: "rgb(68, 125, 233)", color: "rgb(68, 125, 233)"}}>限量发售</span></div>
						</div>
						<div className="group-rt syd-group-rt"><a href="index.html" className="experBtn">立即体验</a></div>
					</li>
				</ul>
			</div>
		</div>
    );
  }
}

export default Recommand;
