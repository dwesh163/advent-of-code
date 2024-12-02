const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');

let rapports = [];
let count = 0;

const validate = (rapport) => {
	let state = -1; // -1: undetermined, 1: increasing, 0: decreasing
	let status = true;

	for (let i = 0; i < rapport.length - 1; i++) {
		const a = rapport[i];
		const b = rapport[i + 1];

		if (Math.abs(a - b) > 3 || a === b) {
			return [false];
		}

		if (state === -1) {
			state = a < b ? 1 : 0;
		} else if ((state === 1 && a > b) || (state === 0 && a < b)) {
			return [false];
		}
	}

	return [true];
};

const try_remove_and_validate = (rapport) => {
	for (let i = 0; i < rapport.length; i++) {
		const modified_rapport = rapport.slice(0, i).concat(rapport.slice(i + 1));
		const [status] = validate(modified_rapport);
		if (status) {
			return true;
		}
	}
	return false;
};

input
	.trim()
	.split('\n')
	.forEach((line) => {
		const levels = line.split(' ').map(Number);
		rapports.push(levels);
	});

rapports.forEach((rapport) => {
	let [status] = validate(rapport);

	if (status) {
		count++;
	} else if (try_remove_and_validate(rapport)) {
		count++;
	}
});

console.log(count);
