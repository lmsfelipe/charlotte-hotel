import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { hotelsFilter } from './../actions';
import RateFilter from './../components/RateFilter';

const mapStateToProps = state => ({ 
	hotels: state.charlotte.hotels
})
const mapDispatchToProps = dispatch => bindActionCreators({
  hotelsFilter
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RateFilter)