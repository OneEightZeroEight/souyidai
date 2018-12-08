import React from 'react'
import Axios from 'axios'
import { Progress } from 'antd';
import {connect} from 'react-redux'
import Xtanchuang from './Xtanchuang.jsx'
import { Toast } from 'antd-mobile';
class Xxiangqing extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name : '详情页',
            detailObj : {},
            time:0,
            shi:0,
            fen:0,
            miao:0
        }
    }
    daojishi(times){
            let hour = parseInt(times/3600)
            let min =  parseInt(times%3600/60)
            let sec = parseInt(times%3600%60)
            this.setState({
                shi :hour,
                fen: min,
                miao :sec
            })
        let timer = setInterval(()=>{
            times--
            this.setState({
                time:times
            })
            if(times<0){clearInterval(timer);return}
            let hour = parseInt(times/3600)
            let min =  parseInt(times%3600/60)
            let sec = parseInt(times%3600%60)
            this.setState({
                shi :hour,
                fen: min,
                miao :sec
            })
        },1000)
    }
        
    getDetailInfo(){
        Toast.loading('Loading...', 0,true);
        Axios.get(`https://m.souyidai.com/1.1/bid/detail/${this.props.xq_init.id}/${this.props.xq_init.type}?from=wap`)
        .then((res)=>{
            console.log(res.data.data);
            let time =0;
            let arr = res.data.data.expand.descriptions
            for(var i=0;i<arr.length;i++){
               if(arr[i].type=='leftTime'){
                    time=arr[i].value
               }
            } 
            this.setState({
                detailObj : res.data.data,
                time:parseInt(time/1000)
            },()=>{
                Toast.hide();
                this.daojishi(this.state.time)
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    componentDidMount(){
        this.getDetailInfo()
        // console.log(`https://m.souyidai.com/1.1/bid/detail/${this.props.xq_init.id}/${this.props.xq_init.type}?from=wap`)
    }
    render(){
        let size = Object.keys(this.state.detailObj).length
        // console.log(size)
        if(size == 0){return <div></div>}
        let obj = this.state.detailObj
        return (
            <div data-v-3259d40b="">
            <div data-v-3259d40b="">
                <div data-v-3259d40b="" className="bid-header">
                    <p data-v-3259d40b="" className="bid-rate"><span data-v-3259d40b="" className="bid-rate-num sm">{obj.base.interestRate}</span>
                        %
                        <span data-v-3259d40b="" className="bid-rate-right">
                             <span data-v-3259d40b="">
                                </span> <br data-v-3259d40b=""/> <span data-v-3259d40b="">{obj.base.interestRateDesc}</span><span
                                data-v-3259d40b=""><i data-v-3259d40b="" className="icon-warn-blue icon-tooltip"></i></span></span></p>
                    <div data-v-3259d40b="" className="bid-progress" style={{display: 'none'}}>
                        完成
                    </div>
                    <div data-v-3259d40b="" className="bid-progress">
                    {
                        (()=>{
                            let size = document.body.clientWidth/5;
                            return <Progress type="circle" percent={obj.base.progressValue} format={() => obj.base.statusText+obj.base.progressValue+'%'}   strokeColor={'orange'} width={size} />   

                        })()
                    }
                    
                    </div>
                    <div data-v-3259d40b="" className="bid-prop">
                        {
                          (()=>{
                            return obj.base.items.map((item,index)=>{
                                return (
                                    <div data-v-3259d40b="" key={index}>
                                    {item.key}
                                     <br data-v-3259d40b=""/><span data-v-3259d40b="">{item.value}</span></div>
                                )
                            })
                          })()  
                        }
                    
                    </div>
                    <p data-v-3259d40b="" className="bid-notes">{obj.base.notes}</p>
                </div>
                <div data-v-3259d40b="" className="bid-info">
                    <div data-v-3259d40b="" className="bid-info-list row">
                        {(()=>{
                            return obj.expand.descriptions.map((item,index)=>{
                                return (
                                    <div data-v-3259d40b="" key={index}>
                                        <div data-v-3259d40b="" className="item-ztb"><span data-v-3259d40b="" className="title">{item.key}</span>
                                            <p data-v-3259d40b="">{
                                                (()=>{
                                                   if(item.type =='leftTime'){
                                                    // let hour = parseInt(item.value/1000/3600)
                                                    // let min =  parseInt(item.value/1000%3600/60)
                                                    // let sec = parseInt(item.value/1000%3600%60)
                                                    return this.state.shi+'时'+this.state.fen+'分'+this.state.miao+'秒'
                                                   }else{
                                                       return item.value
                                                   }
                                                    
                                                })()
                                            }</p>
                                            
                                        </div>
                                    </div>
                                )
                            })

                        })()}
                        
                        
                    </div>
                    <div data-v-3259d40b="" className="bid-info-items row">
                            {
                                (()=>{
                                    return obj.expand.marks.map((item,index)=>{
                                        return (
                                            <div data-v-3259d40b="" className="bid-info-item col-6" key={index}>
                                                <span data-v-3259d40b="" className={"icon icon-1yuan icon-"+item.key}></span>
                                                {item.value}
                                            </div>
                                        )
                                    })
                                })()
                            }

                    </div>

                </div> 
                         {(()=>{
                              return obj.protocol.map((item,index)=>{
                                    return (
                                        <a data-v-3259d40b="" href="javascript:;" data-title={item.desc} data-type={item.type} className="list-btn list-btn-na" key={index}>
                                            <span data-v-3259d40b="" className="icon" style={{backgroundImage:`url(${item.icon})`}}></span>
                                            {item.title}
                                            <span data-v-3259d40b="" className="icon icon-chevron-right"></span>
                                        </a>
                                    )
                               })

                         })()}
 
                    <span data-v-3259d40b="">
                    <span data-v-3259d40b="">

                        { (()=>{
                           return obj.instruction.map((item,index)=>{
                                    if(item.type=='text'){
                                        return(
                                            <div data-v-3259d40b="" key={index}>
                                                <div data-v-3259d40b="" className="bid-detail">
                                                    <div data-v-3259d40b="" className="bid-detail-header">{item.title}</div>
                                                    <div data-v-3259d40b="" className="bid-detail-content">
                                                        <span data-v-3259d40b="">{item.content}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    if(item.type=='pair'){
                                        return (
                                            <div data-v-3259d40b="" key={index}>
                                                <div data-v-3259d40b="" className="bid-detail">
                                                    <div data-v-3259d40b="" className="bid-detail-header">{item.title}</div>
                                                    <div data-v-3259d40b="" className="bid-detail-list">
                                                        {(()=>{
                                                            return item.content.map((item01,index01)=>{
                                                                return (
                                                                    <div data-v-3259d40b="" className="detail-list-item" key={index01}>
                                                                        <p data-v-3259d40b="">{item01.key}</p>
                                                                         <span data-v-3259d40b="">{item01.value}</span>
                                                                        {(()=>{
                                                                            if(item01.type=='notes'){
                                                                                return (
                                                                                    <h2 data-v-3259d40b="">{item01.keyTip}</h2>
                                                                                )
                                                                            }
                                                                        })()}
                                                                        
                                                                    </div>
                                                                )
                                                            })

                                                        })()} 
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                            })
                         })() 
                        }
                    </span>
                    
                    {(()=>{
                        if(obj.application){
                            return obj.application.map((item,index)=>{
                                return (
                                    <div data-v-3259d40b="" className="bid-detail" key={index}>
                                        <div data-v-3259d40b="" className="bid-detail-header">{item.title}</div>
                                        <div data-v-3259d40b="" className="bid-detail-list">
                                            {(()=>{
                                                return item.content.map((item01,index01)=>{
                                                    return (
                                                        <div data-v-3259d40b="" className="detail-list-item" key={index01}>{item01.key}<span data-v-3259d40b="">{item01.value}</span></div>
                                                    )
                                                })
                                            })()}
                                           
                                        </div>
                                    </div>
                                )
                            })
                        }

                    })()
                    }
                    {(()=>{
                        if(obj.repayModeExplain){
                            return (
                                <div data-v-3259d40b="" className="bid-detail">
                                    <div data-v-3259d40b="" className="bid-detail-header">还款方式说明</div>
                                    <div data-v-3259d40b="" className="bid-detail-content">
                                        {obj.repayModeExplain}
                                    </div>
                                </div>

                            )
                        }


                    })()}

                    
                    <div data-v-3259d40b="" className="bid-detail">
                        <div data-v-3259d40b="" className="bid-detail-header">项目免责说明</div>
                        <div data-v-3259d40b="" className="bid-detail-content">
                            1.搜易贷及其合作机构将始终秉持客观公正的原则，严控风险，最大程度的尽力确保借入者信息的真实性，但不保证审核信息100%无误。<br data-v-3259d40b=""/>
                            2.搜易贷作为交易服务平台和信息中介进行信息发布，未以任何明示或暗示的方式对出借人提供担保或承诺保本保息。搜易贷平台提供的各种信息及资料仅供参考，出借人应依其独立判断做出决策。出借人据此进行出借交易的，产生的出借风险由出借人自行承担，搜易贷不承担任何责任。
                        </div>
                    </div>
                    
                <div data-v-3259d40b="" className="bid-tips" style={{marginBottom:'1.37rem'}}>
                        出借有风险，选择需谨慎
                    </div>
                </span>
            </div>
                    

            <Xtanchuang historys={this.props.history}></Xtanchuang>        
        
        </div>
            
        )
    }
}


export default connect((state) => {
    // console.log(state)
    return state
  },(dispatch) => {
    return {
        notodo(){
            dispatch({
              type : 'notodo'
            })
        }
    }
  })(Xxiangqing);