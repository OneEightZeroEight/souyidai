import React, { Component } from 'react';
import Dibu from './components/Dibu.jsx';
import Xlist from './pages/list/Xlist.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Xlist></Xlist>
        <Dibu></Dibu>
      </div>
    );
  }
}

export default App;
