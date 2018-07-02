import GphApiClient from "giphy-js-sdk-core";

export const FETCH_DATA = 'FETCH_DATA';
export const RENDERING_STATUS = 'RENDERING_STATUS';
export const SET_PAGE = 'SET_PAGE';

const API_KEY = "8MpDegmGaRs7ubvKMEqvJaFcZdH5IGOC";
const client = GphApiClient(API_KEY);

export function fetchData(object, page=1) {
	const config = { 
		"q": object,
		"limit": page * 40
	};

	const request = client.search('gifs', config);

	return fetchHelper(request, FETCH_DATA)
}

export function fetchTrendingData(page=1) {
	const config = { 
		"limit": page * 40
	};

	const request = client.trending("gifs", config);

	return fetchHelper(request, FETCH_DATA)
}

function fetchHelper(request, type) {
	return (dispatch) => {
		dispatch({ type: RENDERING_STATUS });
		

		return request.then((response) => {
			dispatch({
				type: type,
				payload: response				
			});		
		})
		.then(() => {
			dispatch({ type: SET_PAGE, payload: null });
		})
		.then(() => {
			dispatch({ type: RENDERING_STATUS })
		})
		.catch(err => console.warn(err.message));
	}	
}