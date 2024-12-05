const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8');

let rules = {};
let data = [];
let middle = [];

input
	.split('\n')
	.slice(0, -1)
	.forEach((line) => {
		if (line.includes('|')) {
			const [rule, value] = line.split('|').map((v) => v.trim());
			if (!rules[rule]) {
				rules[rule] = [];
			}
			rules[rule].push(value);
		} else if (line.includes(',')) {
			data.push(line.split(',').map((val) => parseInt(val)));
		}
	});

const isValidUpdate = (update) => {
	for (let i = 0; i < update.length; i++) {
		for (let j = i + 1; j < update.length; j++) {
			const pageBefore = update[i].toString();
			const pageAfter = update[j].toString();
			if (rules[pageAfter]?.includes(pageBefore)) {
				return false;
			}
		}
	}
	return true;
};

const reorderUpdate = (update) => {
	return update.sort((a, b) => {
		if (rules[b]?.includes(a.toString())) {
			return -1;
		}
		if (rules[a]?.includes(b.toString())) {
			return 1;
		}

		return 0;
	});
};

for (let line of data) {
	if (!isValidUpdate(line)) {
		let reordered = reorderUpdate(line);
		const middleIndex = Math.floor(reordered.length / 2);
		middle.push(reordered[middleIndex]);
	}
}

console.log(middle.reduce((acc, val) => acc + val, 0));
