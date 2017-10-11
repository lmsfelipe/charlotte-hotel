import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HotelsListContainer from './../../containers/HotelsListContainer';

const Main = () => (
	<main>
		<Switch>
			<Route path="/hotelslist" component={HotelsListContainer} />
		</Switch>
	</main>
)

export default Main