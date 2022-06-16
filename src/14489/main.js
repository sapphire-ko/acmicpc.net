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
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = ([[a, b], [c]]) => {
	const p = a + b;
	const q = c * 2;
	if (p < q) {
		console.log(p);
	} else {
		console.log(p - q);
	}
};
