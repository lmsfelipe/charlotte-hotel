import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getHotels } from './../actions';
import HotelsList from './../views/HotelsList';

const mapStateToProps = state => ({ 
	dates: state.charlotte.dates, 
	filteredHotels: state.charlotte.filteredHotels,
	showHotels: state.charlotte.showHotels
})
const mapDispatchToProps = dispatch => bindActionCreators({
  getHotels
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HotelsList)