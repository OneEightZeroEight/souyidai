import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


class Xbottom extends React.Component{
    constructor(props){
        super(props);
        this.props = props;  
    }
    toubiaoBtn(e){
    
        if(!localStorage.getItem('phone')){
            e.preventDefault();
            this.props.opentc();
            document.body.style.overflow='hidden';        
        }else{
           this.props.historys.push('/mine');
        
        }
    }
    render(){
        return (
            <div className="jjs-m-button">
                {
                    (()=>{
                        if(this.props.xq_init.type==='zrb'){
                            return(
                                <div className="text complete"><a href="javascript:;" onClick={this.toubiaoBtn.bind(this)}>投标</a></div>
                            )
                        }else{
                            return(
                                <div>
                                    <Link to='/calc'><span className="calc"></span></Link>
                                    <div className="text"><a href="javascript:;" onClick={this.toubiaoBtn.bind(this)}>投标</a></div>
                                </div>
                                
                            )
                        }

                    })()
                }
                
            </div>
        )
    }
}

export default connect((state) => {
    // console.log(state)
    return state
  },(dispatch) => {
    return {
        opentc(){
            dispatch({
              type : 'toggleTc',
              value:true
            })
        }
    }
  })(Xbottom);