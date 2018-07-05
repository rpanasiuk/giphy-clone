export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export function toggleFavoriteGif(gif) {
	return {
		type: TOGGLE_FAVORITE,
		payload: gif				
	};	
}