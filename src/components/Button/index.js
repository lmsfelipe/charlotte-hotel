import React, { Component } from 'react';

import './Button.css'

export default class Button extends Component {
	render() {
		if(this.props.hide){
			return null
		} else {
				return (
					<div className="app-button">
						<button onClick={this.props.onClick} type="button" className={this.props.className}>{this.props.value}</button>
					</div>
				);
			}
	}
}
