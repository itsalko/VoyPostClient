import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';

const App = (props) => {
	useEffect(() => {
		//on first load - fetch  trips list from  API

		fetch('http://localhost:5000/trips').then((resp) => resp.json()).then((result) => {
			props.dispatch({ type: 'DATA_RECEIVED', value: result });
		});
	}, []);

	return (
		<div className="App">
			<table>
				<tbody>
					<tr>
						<td>
							<input
								type="text"
								placeholder="From"
								onChange={(e) => {
									//on change - dispatch filtering
									props.dispatch({ type: 'FILTER_FROM', value: e.target.value });
								}}
							/>
						</td>
						<td>
							<input
								type="text"
								placeholder="To"
								onChange={(e) => {
									//on change - dispatch filtering
									props.dispatch({ type: 'FILTER_TO', value: e.target.value });
								}}
							/>
						</td>
					</tr>
					<tr>
						<th>From</th>
						<th>To</th>
						<th>Date</th>
						<th>Vehicle</th>
					</tr>
					{props.trips &&
						props.trips.map((trip, i) => {
							{
								/* map received trips list to table*/
							}
							return (
								<tr key={i}>
									<td>{trip.fromName}</td>
									<td>{trip.toName}</td>
									<td>{trip.departAt}</td>
									<td>{trip.vehicle}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			{/* in case of no trips found - show message to user*/}
			{props.trips && !props.trips.length && <h3>We're sorry, but there is no trips for your request</h3>}
		</div>
	);
};

const mapStateToProps = (state) => ({
	trips: state.trips
});

export default connect(mapStateToProps)(App);
