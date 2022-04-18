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

const main = ([a1, a2, a3]) => {
	const p = a2 * 2 + a3 * 4;
	const q = a1 * 2 + a3 * 2;
	const r = a1 * 4 + a2 * 2;

	console.log(Math.min(p, q, r));
};
