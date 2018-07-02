import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import fetchingData from './fetch-data.js';
import setPage from './set-page.js';
import formFetchedData from './form-fetched-data.js';
import renderingStatus from './gif-rendering-status.js';
import toggleFavorite from "./toggle-favorite-gif.js";

export default combineReducers({
	gifs: fetchingData,
	favorites: toggleFavorite,
	isRendering: renderingStatus,
	isFormFetchedData: formFetchedData,
	page: setPage,
	form: formReducer
});