import React from 'react'
import Axios from 'axios'
// import Xzt from './Xzt.jsx'  
// import Xht from './Xht.jsx'
import Xzr from './Xzr.jsx'

class Xlist extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            arr : []
           
        }
    }
    getListInfo(){
        Axios.get('./data/list.json')
        .then((res)=>{
            console.log(res.data.data);
            this.setState({
                arr : res.data.data 
             
            })

        }).catch((err)=>{
          console.log(err);
        })
    }
    componentDidMount(){
        this.getListInfo();
    }
    render() {
        return (
            <div className="foxM-invest-form" style={{marginBottom:'1.4rem'}}>
                <ul className="fina-tabs column-3">
                    <li className="router-link-exact-active active">直投项目</li>
                    <li className="">慧投 </li>
                    <li className="">转让项目</li>
                </ul>
                {/* <Xzt></Xzt> */}
                {/* <Xht></Xht> */}
                <Xzr></Xzr>
                

            </div>
        )
    }

}
export default Xlist