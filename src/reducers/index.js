import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import FETCH_DATA from './fetch-data.js';
import TOGGLE_FAVORITE from "./toggle-favorite-gif.js";

export default combineReducers({
	gifs: FETCH_DATA,
	favorites: TOGGLE_FAVORITE,
	form: formReducer
});