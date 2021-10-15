import _ from 'lodash';
import { FETCH_RECIPES, FETCH_RECIPE } from '../actions/types';
export default function (state = [], action) {
	switch (action.type) {
		case FETCH_RECIPES:
			return action.payload;
		case FETCH_RECIPE:
			return action.payload;
		default:
			return state;
	}
}
