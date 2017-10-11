import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import './PriceHistory.css';

export default class PriceHistory extends Component {
  constructor(props){
    super(props)

    this.state = {
      prices: this.props.prices,
      data: {}
    }

    this.priceHistory = this.priceHistory.bind(this)
  }

  componentDidMount(){
    this.priceHistory()
  }

  priceHistory(){
    const { prices } = this.state

    let month = prices.map(price => { return price.month })
    let value = prices.map(price => { return price.value })

    this.setState({
      data: {
        labels: month,
        datasets: [
          {
            backgroundColor: '#f98100',
            borderWidth: 0,
            hoverBackgroundColor: '#ffa700',
            data: value
          }
        ]
      }
    }) 
  }

  render() {
    return (
      <div className="price-history">
        <Bar
          data={this.state.data}
          height={100}
          options = {{
            legend:{
              display: false
            },
            tooltips: {
              displayColors: false,
              xPadding: 10,
              yPadding: 10,
              callbacks: {
                label: function(tooltipItem, data) {
                  return '$ ' + tooltipItem.yLabel
                }
              }
            },
            scales: {
              xAxes: [{
                barPercentage: 0.5,
                gridLines: {
                  display: false
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
        />
      </div>
    )
  }
}