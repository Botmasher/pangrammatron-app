//import uuid from 'uuid/v4';
import { Pangrammatron } from '../utils/pangrammatron';
import { PhonesDictionary } from '../utils/pangrammatron/cpu-api';

// Async (thunk)

export const ASYNC_REQUEST = 'ASYNC_REQUEST';
const asyncRequest = () => ({type: ASYNC_REQUEST});

// TODO integrate Pangrammatron
// - instantiate Pangrammatron before dispatching final actions
// - pass values to calculate (PANGRAM_SENTENCE, PANPHONE_SENTENCE or just CALCULATE_SENTENCE)

export const READ_PHONES = 'READ_PHONES';
const receiveReadPhones = phones => ({type: READ_PHONES, phones});

export function readPhones(pangrammatron) {
	return function(dispatch) {
		dispatch(asyncRequest());
		return pangrammatron.getInventory()
			.then(data => dispatch(receiveReadPhones(data)));
	};
}

export const READ_ENTRIES = 'READ_ENTRIES';
const receiveReadEntries = entries => ({type: READ_ENTRIES, entries});

export function readEntries(pangrammatron) {
	return function(dispatch) {
		dispatch(asyncRequest());
		return pangrammatron.getEntries()
			.then(data => dispatch(receiveReadEntries(data)));
	};
}
