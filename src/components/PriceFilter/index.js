import React, { Component } from 'react';
import InputRange from 'react-input-range';

import './../../../node_modules/react-input-range/lib/css/index.css';
import './PriceFilter.css';

export default class PriceFilter extends Component {
	constructor(props){
		super(props)

		this.state = {
      value: {
        min: 0,
        max: 610
      }
    }
    
		this.onPriceChange = this.onPriceChange.bind(this)
  }

	onPriceChange(value) {
		const { hotels, hotelsFilter } = this.props

		const objFilter = (obj) => {
			if(obj.price >= value.min && obj.price <= value.max){
				return true
			}
		}

    const arrByPrice = hotels.filter(objFilter)
    hotelsFilter(arrByPrice)
  }
  
	render() {
		return (
			<div className="price-filter">
				<span className="price-filter__title">Price range</span>
				<InputRange
	        maxValue={610}
	        minValue={0}
	        formatLabel={value => `$ ${value}`}
	        onChange={value => this.setState({ value: value })}
	        onChangeComplete={value => this.onPriceChange(value)}
	        value={this.state.value} 
	      />
      </div>
		)
	}
}
