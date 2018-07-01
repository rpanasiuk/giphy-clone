import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import fetchingData from './fetch-data.js';
import TOGGLE_FAVORITE from "./toggle-favorite-gif.js";

export default combineReducers({
	gifs: fetchingData,
	favorites: TOGGLE_FAVORITE,
	form: formReducer
});