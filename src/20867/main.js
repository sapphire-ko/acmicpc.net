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

const main = ([[m, s, g], [a, b], [l, r]]) => {
	const p = m / g + l / a;
	const q = m / s + r / b;

	console.log(p < q ? 'friskus' : 'latmask');
};
