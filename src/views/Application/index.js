import React, { Component } from 'react';

import Home from './../Home';
import Main from	'./Main';
import Footer from './../Footer';


export default class Application extends Component {
	render() {
		return (
			<div>
				<Home />
				<Main />
				<Footer />
			</div>
		);
	}
}
