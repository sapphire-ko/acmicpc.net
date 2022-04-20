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
		const input = buffer[1].split(' ').map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = (input) => {
	if (input.length === 1) {
		console.log('A');
		return;
	}
	const b = input[0];
	const a = (input[1] - b) / b;
	console.log(a, b);
	for (let i = 1; i < input.length; ++i) {
		console.log(i, input[i], input[i - 1] * a + b);
		if (input[i] !== input[i - 1] * a + b) {
			console.log('B');
			return;
		}
	}
	console.log(input[input.length - 1] * a + b);
};
