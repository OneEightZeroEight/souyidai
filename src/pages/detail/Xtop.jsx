import React from 'react'
class Xtop extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name : ''
        }

    }
    goback(){
        console.log(this.props.historys)
        this.props.historys.push('/project/xzt')
    }
    componentDidMount(){
        this.setState({
            name : this.props.name
        })

    }
    render(){
        return (
            <header className="foxM-head">
                <span className="icon-return" onClick={this.goback.bind(this)}></span>
                <h2 className="title">{this.state.name}</h2>
            </header>
        )
    }
}
export default Xtop