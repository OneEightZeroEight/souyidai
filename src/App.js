import React, { Component } from 'react';
import { Route,Redirect,Switch} from "react-router-dom";


import Home from './pages/home/Home.jsx';
import Mine from './pages/mine/Mine.jsx';
import Project from './pages/project/Project.jsx';
import Direct from './pages/direct/Direct.jsx';
import Huitou from './pages/huitou/Huitou.jsx';
import Transfer from './pages/transfer/Transfer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/project" component={Project} />
					<Route path="/project/direct" component={Direct} />
					<Route path="/project/huitou" component={Huitou} />
					<Route path="/project/transfer" component={Transfer} />
					<Route path="/mine" component={Mine} />
					<Redirect from='/' to='/home' />
				</Switch>
      </div>
    );
  }
}

export default App;
