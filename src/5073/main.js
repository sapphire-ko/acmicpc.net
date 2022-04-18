(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	const buffer = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		buffer.pop();
		const input = buffer.map((x) => x.split(' ').map((x) => parseInt(x, 10)).sort((a, b) => a - b));
		main(input);
	});
})();

const main = (input) => {
	for (const [a, b, c] of input) {
		if (a === c) {
			console.log('Equilateral');
			continue;
		}
		if (a + b <= c) {
			console.log('Invalid');
			continue;
		}
		if (a === b || b === c) {
			console.log('Isosceles');
			continue;
		}
		console.log('Scalene');
	}
};
