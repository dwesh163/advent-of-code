const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');

let sum = [];

let right_column = [];
let left_column = [];

input
	.split('\n')
	.slice(0, 1000)
	.forEach((line, index) => {
		const [left, right] = line.split('   ');
		right_column.push(parseInt(right));
		left_column.push(parseInt(left));
	});

right_column = right_column.sort();
left_column = left_column.sort();

for (let i = 0; i < left_column.length; i++) {
	let count = right_column.filter((item) => item == left_column[i]).length;
	sum.push(Math.abs(left_column[i] * count));
}

console.log(sum.reduce((acc, curr) => acc + curr, 0));
