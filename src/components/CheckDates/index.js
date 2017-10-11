import React, { Component } from 'react';
import moment from 'moment';
import { HashLink as Link } from 'react-router-hash-link';

import Button from './../Button'
import CalendarContainer from './../../containers/CalendarContainer'
import './CheckDates.css';

export default class CheckDates extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(payload){
		const endDate = moment(payload['endDate']).format('MMMM D, YYYY')
		const startDate = moment(payload['startDate']).format('MMMM D, YYYY')
		const checkedDates = {
			startDate: startDate,
			endDate: endDate,
			showHotels: true
		}

		this.props.getDates(checkedDates)
	}

	render() {
		const { dates, showHotels } = this.props
		
		return (
			<div className="check-dates">
				<h4 className="check-dates__title">Select the dates to stay in Charlotte</h4>

				<div className="check-dates__wrapper"> 

					<div className="check-dates__display">
						<h3>CHECK-IN</h3>
						<input
		          type='text'
		          placeholder='Choose a date'
		          readOnly
		          value={ dates['startDate'] }
		        />
						<h3>CHECK-OUT</h3>
		        <input
		          type='text'
		          placeholder='Choose a date'
		          readOnly
		          value={ dates['endDate'] }
		        />
		        <Link to="/hotelslist#results">
			        <Button 
			        	hide={dates['endDate'] === ''}
			        	className='primary'
			        	value='Search Hotels'
			        	onClick={ () => showHotels() }
			        />
		        </Link>
					</div>

					<CalendarContainer />

				</div>
			</div>
		);
	}
}
