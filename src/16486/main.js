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
		const input = buffer.map((x) => parseInt(x, 10));
		main(input);
	});
})();

const pi = 3.141592;

const main = ([d1, d2]) => {
	console.log(d1 * 2 + d2 * 2 * pi);
};
