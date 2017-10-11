import { combineReducers } from 'redux';

import { charlotte } from './charlotteReducer';

const CharlotteApp = combineReducers({
	charlotte,
})

export default CharlotteApp