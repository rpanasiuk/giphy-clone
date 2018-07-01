import GphApiClient from "giphy-js-sdk-core";

export const FETCH_DATA = 'FETCH_DATA';
export const INIT_FETCH_DATA = 'INIT_FETCH_DATA';

const API_KEY = "8MpDegmGaRs7ubvKMEqvJaFcZdH5IGOC";

export function fetchData(object) {
	const config = { 
		"q": object,
		"limit": 20
	};

    const client = GphApiClient(API_KEY);
	const request = client.search('gifs', config);

	return (dispatch) => {
		request.then((response) => {
			dispatch({
				type: FETCH_DATA,
				payload: response				
			});		
		})
	}
}

export function initFetchData() {
	const config = { 
		"limit": 20
	};

    const client = GphApiClient(API_KEY);
	const request = client.trending("gifs", config);

	return (dispatch) => {
		request.then((response) => {
			dispatch({
				type: INIT_FETCH_DATA,
				payload: response				
			});		
		})
	}
}