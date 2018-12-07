import React from 'react'
import Xxiangqing from './Xxiangqing.jsx'
import Xshenhe from './Xshenhe.jsx'
import Xtoubiao from './Xtoubiao.jsx'
import { Route,Link} from "react-router-dom";

class Xcontent extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            arr:[
                {
                    name:'项目详情',
                    path:'/detail'
                },
                {
                    name:' 审核信息',
                    path:'/detail/shenhe'
                },
                {
                    name:'投标记录',
                    path:'/detail/toubiao'
                }
            ],
            initIndex : 0
        }
    }
    changIndex(idx){
        this.setState({
            initIndex : idx
        })
    }
    render(){
        return (
                <section className="section">
                    <ul className="tab-view tab-list">
                            {(()=>{
                                return this.state.arr.map((item,index)=>{
                                    return (
                                        <li key={index}><Link to={item.path} className={this.state.initIndex===index?"tab-active":""} onClick={this.changIndex.bind(this,index)}>
                                        {item.name}
                                    </Link></li>
                                    )
                                })
                            })()}
                            
                            
                    </ul>
                
                    <Route path="/detail" exact component={Xxiangqing} />
                    <Route path="/detail/shenhe/" component={Xshenhe}/>
                    <Route path="/detail/toubiao/" component={Xtoubiao}/>

                
                </section>
         
           

        )
    }
}

export default Xcontent