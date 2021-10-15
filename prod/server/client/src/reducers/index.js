import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recipeReducer from './recipeReducer';
import { reducer as reduxForm } from 'redux-form';
export default combineReducers({
	auth: authReducer,
	recipes: recipeReducer,
	form: reduxForm,
});
