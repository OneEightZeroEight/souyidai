import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import Dibu from '../../components/Dibu.jsx'
import XmyInfo from './XmyInfo.jsx';

class Xmycapital extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name : '用户信息页'
        }

    }
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <div className="syd-section" style={{paddingBottom: '1.3333rem'}}>
                 <XmyInfo></XmyInfo>
                 <Dibu></Dibu>
                </div>
            </div>
        )
    }
}

export default connect((state) => {
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
  })(Xmycapital);