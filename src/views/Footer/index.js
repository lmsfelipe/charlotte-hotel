import React, { Component } from 'react';

import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import instagram from './images/instagram.svg';
import './Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<footer>
					<ul>
							<li><a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt='facebook' /></a></li>
							<li><a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt='twitter' /></a></li>
							<li><a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt='instagram' /></a></li>
					</ul>
					<p>© 2004-2017 Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202</p>
				</footer>
			</div>
		);
	}
}
