import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDates, showHotels } from './../actions';
import CheckDates from './../components/CheckDates';

const mapStateToProps = state => ({ dates: state.charlotte.dates })
const mapDispatchToProps = dispatch => bindActionCreators({
  getDates, 
  showHotels
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CheckDates)