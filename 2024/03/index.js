const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');

let sum = [];
let pass = true;

const matches = input.match(/(mul\(\d+,\d+\)|do\(\)|don't\(\))/g);

matches.forEach((match) => {
	if (match === 'do()') {
		pass = true;
		return;
	}

	if (match === "don't()") {
		pass = false;
		return;
	}

	if (pass && match.startsWith('mul')) {
		const [left, right] = match.match(/\d+/g).map(Number);
		sum.push(left * right);
	}
});

const total = sum.reduce((acc, curr) => acc + curr, 0);
console.log(total);
