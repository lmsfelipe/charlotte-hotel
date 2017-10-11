import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import Button from './../Button';
import PriceHistory from './../PriceHistory';
import './HotelWrapper.css'

export default class HotelWrapper extends Component {
	constructor(props){
		super(props)

		this.historyHandleClick = this.historyHandleClick.bind(this)
	}

	historyHandleClick(index, displayHistory){
		document.getElementById(`history-id_${index}`).style.display = displayHistory ? "block" : "none"
		document.getElementById(`hotel-id_${index}`).style.display = displayHistory ? "none" : "block"
	}

	render() {
		return (
			<div className="hotel-wrapper">
				<img className="hotel-wrapper__image" src={this.props.image} alt={this.props.name} />

				<div className="hotel-wrapper__history" id={`history-id_${this.props.index}`}>
					<h4 className="hotel-wrapper__title">Price History for 2017</h4>
					<button className="back-description" onClick={ () => this.historyHandleClick(this.props.index, false) }> Back to description </button>
					<PriceHistory 
						prices={this.props.priceHistory}
					/>
				</div>
				
				<div id={`hotel-id_${this.props.index}`}>
					<div className="hotel-wrapper__info">
						<div className="hotel-infos">
							<StarRatingComponent 
			          name='HotelRate'
			          value={this.props.rate}
			          editing={false}
			          emptyStarColor={'#fff'}
			        />
							<h4 className="hotel-wrapper__title">{this.props.name}</h4>
							<p className="hotel-wrapper__description">{this.props.description}</p>
							<div className="hotel-wrapper__bts">
								<Button 
									className='primary'
									value='Book now'
								/>
							</div>
							<div className="hotel-wrapper__bts">
								<Button 
									className='secondary'
									value='Price History'
									onClick={ () => this.historyHandleClick(this.props.index, true) }
								/>
							</div>
						</div>
						<div className="hotel-price">
							<span className="hotel-price__label">Total</span>
							<span className="hotel-price__value">$ {this.props.price}</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
