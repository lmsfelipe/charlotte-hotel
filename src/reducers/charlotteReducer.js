const initialState = {
	dates: { endDate: '', startDate: '' },
  showHotels: false,
	hotels: [],
  filteredHotels: []
}

export const charlotte = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_DATES':
      return { ...state, dates:  action.payload }

    case 'GET_HOTELS':
      return { ...state, hotels: action.payload, filteredHotels: action.payload }

    case 'RATE_FILTER':
      return { ...state, filteredHotels: action.payload }

    case 'SHOW_HOTELS':
      return { ...state, showHotels: true }

    default:
      return state;
  }
}
