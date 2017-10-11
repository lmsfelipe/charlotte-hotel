import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDates } from './../actions';
import Calendar from './../components/Calendar';

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({
  getDates,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)