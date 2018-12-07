import React from 'react'
import Xtop from './Xtop.jsx'
import Xbottom from './Xbottom.jsx'
import Xcontent from './Xcontent.jsx'
import {connect} from 'react-redux'

class Xdetail extends React.Component{
    constructor(props){
        super(props);
        this.props = props;

    }
    render(){
        return (
            <div className="Xdetail">
               <Xtop name={this.props.xq_init.title} historys={this.props.history}></Xtop> 
               <Xbottom historys={this.props.history}></Xbottom>
               <Xcontent ></Xcontent>
       
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
  })(Xdetail);