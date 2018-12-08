import React from 'react'
import {connect} from 'react-redux'

class Xtanchuang extends React.Component{
    constructor(props){
        super(props)
        this.props = props

    }
    cancel(){
        this.props.closetc();
        document.body.style.overflow='';   
    }
    gologin(){
        this.props.historys.push('/mine')
    }
    render(){
        return (
            <div data-v-3259d40b="" className="confirm-mask" style={{display:this.props.tanchuangShow?'block':'none'}}>
                <div className='tctipsbox'>
                    <h3>快速登录</h3>
                    <p className="welcome">欢迎 , 请你先登录</p>
                    <div className='tcbtnbox'>
                        <p onClick={this.cancel.bind(this)}>取消</p>
                        <p onClick={this.gologin.bind(this)}>登录</p>
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
        closetc(){
            dispatch({
              type : 'toggleTc',
              value:false
            })
        }
    }
  })(Xtanchuang);


