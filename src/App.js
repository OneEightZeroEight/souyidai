import React, { Component } from 'react';
import { Route,Redirect,Switch} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Mine from './pages/mine/Mine.jsx';
import Project from './pages/project/Project.jsx';
import Dibu from './components/Dibu.jsx';
class App extends Component {
  render() {
    return (
      <div className="App">
				<Dibu></Dibu>
				<Switch>
					<Route path="/home/" component={Home} />
					<Route path="/project/" component={Project} />	
					<Route path="/mine/" component={Mine} />
					<Redirect from='/' to='/home' />
				</Switch>
      </div>
    );
  }
}

export default App;
