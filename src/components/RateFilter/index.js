import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import './RateFilter.css';

export default class RateFilter extends Component {

	onStarClick(nextValue) {
		const { hotels, hotelsFilter } = this.props

		const objFilter = (obj) => {
			if(obj.rate === nextValue){
				return true
			}
		}

    const arrByRate = hotels.filter(objFilter)
    hotelsFilter(arrByRate)
  }

	render() {
		return (
			<div className="rate-filter">
				<span className="rate-filter__title">Starts</span>
				<div className="rate-filter__stars">
					<StarRatingComponent 
		        name='HotelFilterRate'
		        value={5}
		        onStarClick={this.onStarClick.bind(this)}
		        emptyStarColor='#dadada'
		      />
		    </div>
      </div>
		)
	}
}
