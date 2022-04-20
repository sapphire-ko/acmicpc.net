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
		const input = buffer.map(Number);
		main(input);
	});
})();

const main = ([a1, a2, a3, b1, b2, b3]) => {
	const p = a1 * 3 + a2 * 2 + a3;
	const q = b1 * 3 + b2 * 2 + b3;

	if (p === q) {
		console.log('T');
	} else if (p < q) {
		console.log('B');
	} else {
		console.log('A');
	}
};
