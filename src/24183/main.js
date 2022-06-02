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
		const input = buffer[0].split(' ').map(Number);
		main(input);
	});
})();

const main = ([a, b, c]) => {
	const p = a * 2 * (0.229 * 0.324);
	const q = b * 2 * (0.297 * 0.42);
	const r = c * 0.21 * 0.297;

	console.log(p + q + r);
};
