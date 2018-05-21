export class PhonesDictionary {
	constructor() {
		this.paths = {
			en: {
				phon: './dicts/en/cmudict-0.7b.phones',
				lex: './dicts/en/cmudict-0.7b'
			}
		};
		this.phones = {};
		this.entries = {};
	}

	gatherPhones = () => {
		return fetch(new Request(this.paths.en.phon)).then(res => res.text()).then(data => {
			const phones = new Set();
			for (let line of data.toString('utf-8').match(/[^\n]+/g)) {
				phones.add(line.split('\t')[0]);
			}
			this.phones = phones;
			return this.phones;
		});
	}

	// TODO fix cutting lex items so that e.g. HAWAII can return phones associated with HAWAII'S
	gatherEntries = () => {
		return fetch(new Request(this.paths.en.lex)).then(res => res.text()).then(data => {
			let word = '';
			let sounds = [];
			// search lines for formatted entries
			for (let line of data.toString('utf-8').match(/[^\n]+/g)) {
				const lineElements = line.match(/[^ \t]+/g);
				// discard non-word lines
				if (!lineElements || lineElements[0].match(/[^A-Z']/g) || !lineElements[0][0].match(/[A-Z]/g)) continue;
				word = lineElements[0].match(/[A-Z]+('[A-Z]+)?/g)[0];
				sounds = lineElements.length > 1  && lineElements[1].match(/[A-Z]([A-Z]?)/g)
					? lineElements.slice(1).map(phone => (
							phone.match(/[A-Z]([A-Z]?)/g)[0] 		// strip phones of trailing numbers
						))
					: []
				;
				// find and store real entries in word:[phones] pairs
				if (sounds && sounds.length > 0 && this.phones.has(sounds[0])) {
					this.entries[word] = sounds;
				}
			}
			return this.entries;
		});
	}
}
