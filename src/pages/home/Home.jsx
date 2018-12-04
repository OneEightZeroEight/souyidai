import React, { Component } from 'react';

import Dibu from '../../components/Dibu.jsx';
import Logo from './Logo.jsx';
import Banner from './Banner.jsx';
import Register from './Register.jsx';
import Recommand from './Recommand.jsx';
import Advantages from './Advantage.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import Zhanwei from './zhanwei.jsx';

class Home extends Component {
  render() {
    return (
		<div className="home">
			<Logo></Logo>
			<Banner></Banner>
			<Register></Register>
			<Recommand></Recommand>
			<Advantages></Advantages>
			<About></About>
			<Footer></Footer>
			<Zhanwei></Zhanwei>
			<Dibu></Dibu>
		</div>
    );
  }
}

export default Home;
