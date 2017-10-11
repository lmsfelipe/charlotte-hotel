import React, { Component } from 'react';

import Header from './../Header'
import CheckDatesContainer from './../../containers/CheckDatesContainer'

export default class Home extends Component{
	render(){
		return(
			<div>
				<Header />
				<CheckDatesContainer />
			</div>
		)
	}
}