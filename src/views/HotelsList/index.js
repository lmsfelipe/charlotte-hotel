import React, { Component } from 'react';

import HotelWrapper from './../../components/HotelWrapper';
import RateFilterContainer from './../../containers/RateFilterContainer';
import PriceFilterContainer from './../../containers/PriceFilterContainer';
import './HotelsList.css';

export default class HotelsList extends Component {
	constructor(props){
		super(props)

		this.hotelsList = this.hotelsList.bind(this)
	}

	componentDidMount(){
		this.props.getHotels()
	}

	hotelsList(){
		const { filteredHotels } = this.props

		return filteredHotels.map((hotel, index) => {
			return (
				<div key={index}>
					<HotelWrapper 
						index={index}
						name={hotel.name}
						image={hotel.image}
						priceHistory={hotel.price_history}
						rate={hotel.rate}
						description={hotel.description}
						price={hotel.price}
					/>
				</div>
			)
		})
	}

	render() {
		const { dates, showHotels, getHotels } = this.props

		if(showHotels){
			return ( 
				<div id="results">
					<h3 className="hotels__title">Best choices between { dates.startDate } and { dates.endDate }</h3>
					<div className="hotels-container">
						<div className="hotel-filters">
							<h3 className="hotel-filters__title">Filters</h3>
							<PriceFilterContainer />
							<RateFilterContainer />
							<button className="hotel-filters__reset" onClick={ () => getHotels() }>Reset Filters</button>
						</div>
						<div className="hotels-list">
							{ this.hotelsList() }
						</div>
					</div>
				</div>
			);
		}
		return null
	}
}
