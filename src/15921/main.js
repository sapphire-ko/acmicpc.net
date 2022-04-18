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
		const input = buffer.map((x) => x.split(' ').map((x) => parseInt(x, 10)));
		main(input);
	});
})();

const main = (input) => {
	const n = input[0][0];
	if (n === 0) {
		console.log('divide by zero');
	} else {
		const p = input[1].reduce((a, b, i) => a + b, 0);
		if (p === 0) {
			console.log('divide by zero');
		} else {
			console.log('1.00');
		}
	}
};
