import _ from 'lodash';
import { FETCH_RECIPES, FETCH_RECIPE, CREATE_RECIPE, EDIT_RECIPE } from '../actions/types';
export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_RECIPES:
			return { ...state, ..._.mapKeys(action.payload, '_id') };
		case FETCH_RECIPE:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_RECIPE:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_RECIPE:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
}
