import axios from 'axios'

const URL = "http://www.raphaelfabeni.com.br/rv/hotels.json"

export const getHotels = () => {
  return (dispatch) => {
    axios.get(URL)
      .then(resp => dispatch({ type: 'GET_HOTELS', payload: resp.data.hotels }))
      .catch(err => console.log("Error to get data"))
  }
}

export const hotelsFilter = (rateFiltered) => ({
	type: 'RATE_FILTER',
	payload: rateFiltered
})

export const getDates = (dates) => ({
	type: 'GET_DATES',
	payload: dates
})

export const showHotels = () => ({
	type: 'SHOW_HOTELS'
})