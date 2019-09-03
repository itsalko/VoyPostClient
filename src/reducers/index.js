let initialState = {};
let filterFrom = '';
let filterTo = '';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FILTER_FROM':  //filtering initial list by FROM field and return changed one
			filterFrom = action.value;
			return {
				trips: initialState.trips.filter(
					(trip) => trip.fromName.indexOf(filterFrom) !== -1 && trip.toName.indexOf(filterTo) !== -1
				)
			};

		case 'FILTER_TO': //filtering initial list by TO field and return changed one
			filterTo = action.value;
			return {
				trips: initialState.trips.filter(
					(trip) => trip.fromName.indexOf(filterFrom) !== -1 && trip.toName.indexOf(filterTo) !== -1
				)
			};

		case 'DATA_RECEIVED':  //dispatches when initial data fetch completed
			initialState = { trips: action.value };

			return initialState;
		default:
			return state;
	}
};
export default reducer;
