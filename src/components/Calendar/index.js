import React, { Component } from 'react';
import { DateRange } from 'react-date-range';
import moment from 'moment';

import './Calendar.css';

export default class Calendar extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(payload){
		const endDate = moment(payload['endDate']).format('MMMM D, YYYY')
		const startDate = moment(payload['startDate']).format('MMMM D, YYYY')
		const checkedDates = {
			startDate: startDate,
			endDate: endDate
		}

		this.props.getDates(checkedDates)
	}

	render() {
		return (
			<div className="date-range">
        <DateRange
          calendars={1}
          onChange={ this.handleChange.bind(this) }
          theme={{
          	Calendar: {
        			borderTop: '3px solid #e3e3e3',
        			width: '310px'
          	},
          	MonthAndYear: {
          		fontSize: '0.95em',
        			letterSpacing: '0.05em',
        			color: '#777777',
        			marginBottom: '11px'
          	},
          	MonthButton: {
          		background: '#fff'
          	},
          	MonthArrowPrev : {
              borderRightColor : '#c1c1c1',
            },
            MonthArrowNext : {
              borderLeftColor : '#c1c1c1',
            },
            Weekday: {
              color: '#bfbfbf',
              borderBottom: '3px solid #e3e3e3',
              marginBottom: '10px',
              paddingBottom: '30px'
            },
            DaySelected: {
              background: '#fff',
						  color: '#79bd1a',
						  borderRadius: '50%',
						  boxShadow: 'inset 0px 0px 0px 2px #79bd1a'
            },
            DayInRange:{
              background: '#79bd1a',
              color: '#fff',
              borderRadius: '50%'
            },
            DayHover:{
              background: '#75a236',
              color: '#fff',
              borderRadius: '50%'
            }
          }}
        />
			</div>
		);
	}
}
