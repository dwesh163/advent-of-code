const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8');
let count = 0;
let data = [];

input
	.split('\n')
	.slice(0, -1)
	.forEach((line) => {
		data.push(line.split(''));
	});

console.log(data);

for (let row = 0; row < data.length; row++) {
	for (let col = 0; col < data[row].length; col++) {
		const letter = data[row][col];
		if (letter === 'X') {
			// Horizontal right check
			if (col + 3 < data[row].length && data[row][col + 1] === 'M' && data[row][col + 2] === 'A' && data[row][col + 3] === 'S') {
				count++;
				console.log('Horizontal right check');
			}

			// Horizontal left check
			if (col - 3 >= 0 && data[row][col - 1] === 'M' && data[row][col - 2] === 'A' && data[row][col - 3] === 'S') {
				count++;
				console.log('Horizontal left check');
			}

			// Vertical down check
			if (row + 3 < data.length && data[row + 1][col] === 'M' && data[row + 2][col] === 'A' && data[row + 3][col] === 'S') {
				count++;
				console.log('Vertical down check');
			}

			// Vertical up check
			if (row - 3 >= 0 && data[row - 1][col] === 'M' && data[row - 2][col] === 'A' && data[row - 3][col] === 'S') {
				count++;
				console.log('Vertical up check');
			}

			// Diagonal down-right check
			if (row + 3 < data.length && col + 3 < data[row].length && data[row + 1][col + 1] === 'M' && data[row + 2][col + 2] === 'A' && data[row + 3][col + 3] === 'S') {
				count++;
				console.log('Diagonal down-right check');
			}

			// Diagonal up-left check
			if (row - 3 >= 0 && col - 3 >= 0 && data[row - 1][col - 1] === 'M' && data[row - 2][col - 2] === 'A' && data[row - 3][col - 3] === 'S') {
				count++;
				console.log('Diagonal up-left check');
			}

			// Diagonal down-left check
			if (row + 3 < data.length && col - 3 >= 0 && data[row + 1][col - 1] === 'M' && data[row + 2][col - 2] === 'A' && data[row + 3][col - 3] === 'S') {
				count++;
				console.log('Diagonal down-left check');
			}

			// Diagonal up-right check
			if (row - 3 >= 0 && col + 3 < data[row].length && data[row - 1][col + 1] === 'M' && data[row - 2][col + 2] === 'A' && data[row - 3][col + 3] === 'S') {
				count++;
				console.log('Diagonal up-right check');
			}
		}
	}
}

console.log(count);
