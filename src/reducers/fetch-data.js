import { FETCH_DATA, INIT_FETCH_DATA } from '../actions/fetch-data.js';

export default function(state=[], action) {
	switch (action.type) {
		case INIT_FETCH_DATA:
			return action.payload.data;

		case FETCH_DATA:
			return action.payload.data;
	
	default:
		return state;
	}
}