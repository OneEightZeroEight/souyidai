import React from 'react'
import Axios from 'axios'
import Xzt from './Xzt.jsx'  
import Xht from './Xht.jsx'
import Xzr from './Xzr.jsx'
import { Route,Link} from "react-router-dom";
import {connect} from 'react-redux'
import Dibu from '../../components/Dibu.jsx'

class Xlist extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            arr : [],
            navn:[{
              title:"直投项目",
              href:"/project/xzt",
            },{
              title:"慧投",
              href:"/project/xht",
            },{
              title:"转让项目",
              href:"/project/xzr",
            }]
        }
    }
   
    getListInfo(){
        Axios.get('./data/list.json')
        .then((res)=>{
            // console.log(res.data.data);
            this.setState({
                arr : res.data.data 
             
            })

        }).catch((err)=>{
          console.log(err);
        })
    }
    componentDidMount(){
        this.props.navigateTo(1); 
        
    }
    render() {
        return (
            <div className="foxM-invest-form" >
                <ul className="fina-tabs column-3">
                {
						(()=>{
							return this.state.navn.map((item,index)=>{
								return (
									<Link to={{pathname:item.href}} replace key={index}>
										<li
										onClick={this.props.changeIndex.bind(this,index)}
										key={index}
										className={index === this.props.listNavIndex?"router-link-exact-active active":""}>
											{item.title}
										</li>
									</Link>
									
								)
							})
						})()
					}
                </ul>
              
                  <Route path="/project/xzt" component={Xzt}/>
                  <Route path="/project/xht" component={Xht} />
                  <Route path="/project/xzr" component={Xzr} />
    
                    <Dibu></Dibu>
            </div>
            
        )
    }

}
export default connect((state) => {
//   console.log(state)
  return state
},(dispatch) => {
  return {
        changeIndex(idx){
          console.log(idx)
          dispatch({
            type : 'toggleNavIndex',
            index : idx
          })
      },
			navigateTo(index){
				dispatch({
					type:"navigateTo",
					nav:index
				})
			}
			
  }
})(Xlist);
