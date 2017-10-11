import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Application from './views/Application';
import registerServiceWorker from './registerServiceWorker';
import CharlotteApp from './reducers'
import './index.css';

let store = createStore(
  CharlotteApp,
  applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Application />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
