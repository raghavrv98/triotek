import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './dashboard';
import AddOrEditEmployeeDetails from './addOrEditEmployeeDetails'
import Login from './login';

class Routes extends React.Component {
	render() {
		return <React.Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
					<Route exact path="/addOrEditEmployeeDetails/:id?" render={props => <AddOrEditEmployeeDetails {...props} />} />
					<Route exact path="/login" render={props => <Login {...props} />} />
					<Route exact path="/" render={props => <Login {...props} />} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	}
}

export default Routes;