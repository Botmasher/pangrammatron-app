//import uuid from 'uuid/v4';

export const READ_PHONES = 'READ_PHONES';
export function readPhones(pangrammatron) {
	return {type: READ_PHONES, phones: pangrammatron.getInventory() };
}

export const READ_ENTRIES = 'READ_ENTRIES';
export function readEntries(pangrammatron) {
  return {type: READ_ENTRIES, entries: pangrammatron.getDictionary() };
}
