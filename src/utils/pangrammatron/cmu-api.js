const fs = require('fs');

console.log()

class PhonesDictionary {
	constructor() {
		this.paths = {
			en: {
				lex: 'dicts/cmudict-0.7b.txt',
				phon: 'dicts/cmudict-0.7b.phones'
			}
		};
		this.phones = {};
		this.entries = {};
	}

	gatherPhones(cb) {
		return new Promise((resolve, reject) => {
			fs.readFile(`../${this.paths.en.phon}`,
				(error, data) => {
					const phones = new Set();
					for (let line of data.toString('utf-8').match(/[^\n]+/g)) {
						phones.add(line.split('\t')[0]);
					}
					this.phones = phones;
					resolve(this.phones);
				}
			);
		});
	}

	gatherEntries() {
		return new Promise((resolve, reject) => {
			fs.readFile(`../${this.paths.en.lex}`,
				(error, data) => {
					let word = '';
					let sounds = [];
					// search lines for formatted entries
					for (let line of data.toString('utf-8').match(/[^\n]+/g)) {
						const l_elems = line.match(/[^ \t]+/g);
						if (l_elems[0].match(/[#;{}]/g)) continue;
						sounds = l_elems && l_elems.length > 1 && l_elems[1].match(/[A-Z]([A-Z]?)/g)
							? l_elems.slice(1).map(phone => (
									phone.match(/[A-Z]([A-Z])?/g)[0]		// strip phones of trailing numbers
								))
							: []
						;
						// find and store real entries as 'word': [phone_0, ..., phone_n]
						if (sounds && sounds.length > 0 && this.phones.has(sounds[0])) {
							word = l_elems[0].match(/[A-Z]+/g)[0];
							this.entries[word] = sounds;
						}
					}
					resolve(this.entries);
				}
			);
		});
	}
}

export default PhonesDictionary;
