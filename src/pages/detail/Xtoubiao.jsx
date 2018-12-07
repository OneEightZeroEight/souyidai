import React from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
class Xtoubiao extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name : '投标记录',
            tbarr : []
        }
    }
    getTbInfo(){   
            Axios.get(`https://m.souyidai.com/1.1/bid/investlog/${this.props.xq_init.id}?from=wap`)
            .then((res)=>{
                // console.log(res.data.data.list);
                this.setState({
                    tbarr : res.data.data.list
                })
            }).catch((err)=>{
                console.log(err);
            })
        }
        componentDidMount(){
            this.getTbInfo()
        }
    render(){
        return (
            <div data-v-2aeb6f04="">
                <div data-v-2aeb6f04="" className="bid-history">
                    <div data-v-44342678="" data-v-2aeb6f04="">
                        <div data-v-44342678="" className="loading-boxs small">
                            <div data-v-44342678="" className="loading cf type2"><img data-v-44342678="" src="data:image/png;base64,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"
                                    alt="" className="loading-img"/>
                                <p data-v-44342678="">搜易贷</p>
                            </div>
                            <div data-v-44342678="" className="loading errorInfo"></div>
                            <p data-v-44342678="" className="errorText">数据加载出错，请点击重新加载</p>
                        </div>
                    </div>
                    <div data-v-2aeb6f04="" className="bid-history-header" style={{color: 'rgb(153, 153, 153)', fontWeight: 'lighter'}}>
                        {
                            (()=>{
                                let length = this.state.tbarr.length
                                if(!length){
                                    return(
                                        <div>
                                            <div data-v-2aeb6f04="" className="no-record-images"></div>
                                            <p className="no-record-text">暂无投标记录</p>
                                        </div>
                                        
                                    )
                                }else{
                                    return(
                                        <div>
                                            <span data-v-2aeb6f04="" style={{fontWeight: 'normal'}}>投标记录仅显示最近的{length}笔</span>
                                            <ul data-v-2aeb6f04="" className="bid-history-list">
                                                {(()=>{
                                                        return this.state.tbarr.map((item,index)=>{
                                                            return(
                                                                <li data-v-2aeb6f04="" className="bid-history-item" key={index}>
                                                                <div data-v-2aeb6f04="" className="history-item-name">
                                                                    {item.username}
                                                                </div>
                                                                <div data-v-2aeb6f04="" className="history-item-money">
                                                                    {item.amount}元<br data-v-2aeb6f04=""/> <span data-v-2aeb6f04="" className="history-item-tiem">{item.time}</span></div>
                                                            </li>

                                                            )
                                                        })


                                                })()}
                                               
                                            </ul>
                                        </div>
                                    )
                                }



                            })()
                        }
                       
                    </div>
                
                </div>
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
  })(Xtoubiao);