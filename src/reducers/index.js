let initialState = {
    
};
let filterFrom="";
let filterTo="";

 const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'FILTER_FROM':
            filterFrom = action.value;
			return {
				trips: initialState.trips.filter((trip) => (trip.fromName.indexOf(filterFrom) !== -1)&&(trip.toName.indexOf(filterTo) !== -1))
			};

		case 'FILTER_TO':
            filterTo = action.value;
			return {
				trips: initialState.trips.filter((trip) => (trip.fromName.indexOf(filterFrom) !== -1)&&(trip.toName.indexOf(filterTo) !== -1))
			};

        
        case 'DATA_RECEIVED':
                initialState = {trips:action.value};
               
                return initialState;
        default:
			return state;
	}
};
export default reducer;