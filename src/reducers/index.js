import {
	READ_PHONES,
  //ADD_PHONE,
  //EDIT_PHONE,
  //DELETE_PHONE,
  READ_ENTRIES,
  //ADD_ENTRY,
  //EDIT_ENTRY,
  //DELETE_ENTRY
} from '../actions';
import { combineReducers } from 'redux';

function phones(state={}, action) {
	switch (action.type) {
		case READ_PHONES:
			return new Set([
				...state,
				...action.phones
			]);
		default:
			return state;
	}
}

function entries(state={}, action) {
	switch (action.type) {
		case READ_ENTRIES:
			return ({
				...state,
				...action.entries
			});
		default:
			return state;
	}
}

export default combineReducers({ entries, phones });
