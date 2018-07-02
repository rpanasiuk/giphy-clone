const FORM_FETCHED_DATA = 'FORM_FETCHED_DATA';

export default function(state=false, action) {
	switch (action.type) {
		case FORM_FETCHED_DATA:
			return action.payload;			
	
	default:
		return state;
	}
}