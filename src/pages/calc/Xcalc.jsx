import React from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
var querystring = require('querystring');

class Xcalc extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name : '计算器',
            focusStatus:true,
            keyboardShow : true,
            tipsShow : false,
            tipsText : '',
            shouyi : '--',
            lendMoney:'10000',
            resobj : {},
            numarr:[
                {
                    value: 1,
                    class : 'number'
                },
                {
                    value: 2,
                    class : 'number'
                },
                {
                    value : 3,
                    class : 'number'
                },
                {
                    value : 4,
                    class : 'number'
                },
                {
                    value : 5,
                    class : 'number'
                },
                {
                    value: 6,
                    class : 'number'
                },
                {
                    value: 7,
                    class : 'number'
                },
                {
                    value: 8,
                    class : 'number'
                },
                {
                    value: 9,
                    class : 'number'
                },
                {
                    value : '清空',
                    class : 'clear'
                },
                {
                    value : 0,
                    class : 'number'
                }
            ]
        
        }

    }
    goback(){
        this.props.history.goBack();
    }
    toggleStatus(){
        this.timerId = setInterval(()=>{
            this.setState({
                focusStatus : !this.state.focusStatus
            })
        },600)

    }
    showTips(bool,text){
        this.setState({
            tipsShow : bool,
            tipsText : text
        })        
    }
    handleInput(e){
        // console.log(e.target.innerText);
        let type = e.target.innerText;
        // console.log(type)
        switch(type){
            case '1' :
            case '2' :
            case '3' :
            case '4' :
            case '5' :
            case '6' :
            case '7' :
            case '8' :
            case '9' :
            case '0' :  if(this.state.lendMoney===''){
                            if(type==='0'){this.showTips(true,'请输入大于0的金额!');break;}
                            this.setState({
                                lendMoney : type
                            },()=>{ this.getres()})
                            this.showTips(false,'');
                            break;
                        }
                        this.showTips(false,'');//金额大于不显示tips
                        let lendMoneyarr = this.state.lendMoney.split('');
                        lendMoneyarr.push(type);
                        let lendMonystr = lendMoneyarr.join("");
                        if(Number(lendMonystr)>Number(this.props.xq_init.amount/100)){
                            this.showTips(true,'不能超过项目金额哦!');
                            break;
                        }
                        // console.log(lendMonystr)
                        this.setState({
                            lendMoney : lendMonystr
                        },()=>{this.getres()});
                        break;
            case '清空' :   this.setState({
                                lendMoney : '',
                                shouyi : '--'
                            }); 
                            this.showTips(true,'请先输入出借金额!') ;
                            break;    

            case ''  :      let lendMoneyarr2 = this.state.lendMoney.split('');
                            lendMoneyarr2.pop();
                            let lendMonystr2 = lendMoneyarr2.join(""); 
                            if(lendMonystr2===''){
                                this.showTips(true,'请先输入出借金额!');  
                            }
                            this.setState({
                                lendMoney : lendMonystr2
                            },()=>{this.getres()});
                            break ;        

        }
       
    }
    keyboardOut(){
        this.setState({
            keyboardShow : false ,
            focusStatus  : false
        })
        clearInterval(this.timerId);
    }
    keyboardIn(){
        this.setState({
            keyboardShow : true ,
            focusStatus  : true
        })
        this.toggleStatus();
    }
    getres(){
        // console.log(Number(this.state.lendMoney))
        if(Number(this.state.lendMoney)=== 0){
            this.setState({
                shouyi : '--'
            });return}
        Axios.post('https://m.souyidai.com/invest/calculator/receipt', querystring.stringify({
        bidId: this.props.xq_init.id,
        amount: Number(this.state.lendMoney),
        productType: this.props.xq_init.type}))
        .then((res)=>{
            console.log(res.data.data)
            this.setState({
                resobj :res.data.data,
                shouyi :res.data.data.totalInterest
            })

        }).catch((err)=>{
          console.log(err);
        })
    }
    componentDidMount(){
       this.getres() ;
       this.toggleStatus();
     
     
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    render(){
        return (
            <div>
                <div data-v-57710902="" className="syd-calculator">
                    <div data-v-57710902="">
                        <header className="foxM-head"><span className="icon-return" onClick={this.goback.bind(this)}></span>
                        
                            <h2 className="title">计算器</h2>
                        </header>
                    </div>
                    <div data-v-57710902="" className="earnings">
                        <div data-v-57710902="" className="title">预计收益(元)</div>
                        <div data-v-57710902="" className="num">{this.state.shouyi.replace('元','')}</div>
                    </div>
                    <div data-v-57710902="" className="main">
                        <div data-v-57710902="" className="title">出借金额(元)</div>
                        <div data-v-57710902="" className="input-box" onClick={this.keyboardIn.bind(this)}>
                            <div data-v-57710902="" className="number">{this.state.lendMoney}</div>
                            <div data-v-57710902="" className="cursor" style={{visibility:this.state.focusStatus?'visible':'hidden'}}></div>
                        </div>
                        <div data-v-57710902="" className="items">
                            <div data-v-57710902="" className="item left">
                                <div data-v-57710902="" className="value">{this.state.resobj.investRate}</div>
                                <div data-v-57710902="" className="state">协议约定年化利率</div>
                            </div>
                            <div data-v-57710902="" className="item middle">
                                <div data-v-57710902="" className="value">{this.state.resobj.periodsText}</div>
                                <div data-v-57710902="" className="state">期限</div>
                            </div>
                            <div data-v-57710902="" className="item right">
                                <div data-v-57710902="" className="value">{this.state.resobj.repayModeText}</div>
                                <div data-v-57710902="" className="state">还款方式</div>
                            </div>
                        </div>
                        <div data-v-57710902="" className={this.state.tipsShow?"error-box error-show":"error-box hide error-close"}>
                            <div data-v-57710902="" className="error">{this.state.tipsText}</div>
                            <div data-v-57710902="" className="corner"></div>
                        </div>
                    </div>
                    <div data-v-57710902="" className="repay-plan"><span data-v-57710902="" className="text">查看还款计划</span><span
                            data-v-57710902="" className="plan-arrow"></span></div>
                    <div data-v-0585424a="" data-v-57710902="" className={this.state.keyboardShow?"syd-keyboard":"syd-keyboard hide"}>
                        <div data-v-0585424a="" className="left">

                            {(()=>{
                               return this.state.numarr.map((item,index)=>{
                                    return (
                                        <div data-v-0585424a="" className={item.class} key={index} onClick={this.handleInput.bind(this)}>{item.value}</div>
                                    )
                                })


                            })()}
                        
                            <div data-v-0585424a="" className="close" onClick={this.keyboardOut.bind(this)}>
                                <div data-v-0585424a="" className="image"></div>
                            </div>
                        
                        </div>
                        <div data-v-0585424a="" className="right">
                            <div data-v-0585424a="" className="delete" onClick={this.handleInput.bind(this)}>
                                <div data-v-0585424a="" className="image"></div>
                            </div>
                            <div data-v-0585424a="" className="certain" onClick={this.keyboardOut.bind(this)}>确定</div>
                        </div>
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
  })(Xcalc);