import _ from 'lodash';

import { TOGGLE_FAVORITE } from "../actions/toggle-favorite-gif.js";

export default function(state={}, action) {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const data = action.payload;
			const id = Object.keys(data)[0];

			if (state[id]) {
				const newObj = _.cloneDeep(state);
				return _.omit(newObj, id);
			}

			return { ...state, ...data };
	
	default:
		return state;
	}
}