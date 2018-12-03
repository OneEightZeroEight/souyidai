import React, { Component } from 'react';
import Top from './Top.jsx';
import Dibu from '../../components/Dibu.jsx';
class Project extends Component {
  render() {
    return (
			<div className="top">
				<Top></Top>
				<Dibu></Dibu>
			</div>
    );
  }
}

export default Project;
