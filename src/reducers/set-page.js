import { SET_PAGE } from '../actions/fetch-data.js';

export default function(state=1, action) {
	switch (action.type) {
		case SET_PAGE:
			if (action.payload) {
				return 1;
			}
			
			return ++state;			
	
	default:
		return state;
	}
}