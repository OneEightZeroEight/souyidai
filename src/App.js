import React, { Component } from 'react';
import { Route,Redirect,Switch} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Mine from './pages/mine/Mine.jsx';
import Project from './pages/project/Project.jsx';
import Detail from './pages/detail/Xdetail.jsx';
import Calc from './pages/calc/Xcalc.jsx';

import Zhuce from './components/zhuce/Zhuce.jsx';
import Info from './components/zhuce/Info.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Switch>
					<Route path="/home/" component={Home} />
					<Route path="/project/" component={Project} />	
					<Route path="/mine/" component={Mine} />
					<Route path="/detail/" component={Detail} />
					<Route path="/calc" component={Calc} />
					<Route path="/zhuce/" component={Zhuce} />
					<Route path="/info/" component={Info} />
					<Redirect from='/' to='/home' />
				</Switch>		
      </div>
    );
  }
}

export default App;
