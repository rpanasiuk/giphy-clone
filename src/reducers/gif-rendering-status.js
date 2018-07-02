import { RENDERING_STATUS } from '../actions/fetch-data.js';

export default function(state=false, action) {
	switch (action.type) {
		case RENDERING_STATUS:
			return !state;			
	
	default:
		return state;
	}
}