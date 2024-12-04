const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8');
let count = 0;
let data = input
	.split('\n')
	.slice(0, -1)
	.map((line) => line.split(''));

for (let row = 1; row < data.length - 1; row++) {
	for (let col = 1; col < data[row].length - 1; col++) {
		const letter = data[row][col];

		if (letter === 'A') {
			const patterns = [
				// MAS pattern
				[
					[row - 1, col - 1, 'M'],
					[row + 1, col + 1, 'S'],
					[row - 1, col + 1, 'S'],
					[row + 1, col - 1, 'M'],
				],

				[
					[row - 1, col - 1, 'M'],
					[row + 1, col + 1, 'S'],
					[row - 1, col + 1, 'M'],
					[row + 1, col - 1, 'S'],
				],

				// SAM pattern
				[
					[row - 1, col - 1, 'S'],
					[row + 1, col + 1, 'M'],
					[row - 1, col + 1, 'M'],
					[row + 1, col - 1, 'S'],
				],

				[
					[row - 1, col - 1, 'S'],
					[row + 1, col + 1, 'M'],
					[row - 1, col + 1, 'S'],
					[row + 1, col - 1, 'M'],
				],
			];

			for (const pattern of patterns) {
				if (pattern.every(([r, c, char]) => data[r][c] === char)) {
					count++;
					console.log(`Pattern found at ${row}, ${col}`);
				}
			}
		}
	}
}

console.log(count);
