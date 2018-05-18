//import uuid from 'uuid/v4';

export const READ_PHONES = 'READ_PHONES';
export function readPhones(phones) {
	return {type: READ_PHONES, phones};
}

export const READ_ENTRIES = 'READ_ENTRIES';
export function readEntries(entries) {
  return {type: READ_ENTRIES, entries};
}
