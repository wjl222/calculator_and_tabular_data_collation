import { combineReducers } from 'redux-immutable';
import { reducer as calReducer } from '../pages/calculator/store';
import { reducer as formReducer } from '../pages/form/store';

export default combineReducers({
  calculator: calReducer,
  form:formReducer
})