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

const main = ([a, x, b, y, T]) => {
	const fn = (p, q, k) => {
		const r = Math.max(0, T - k);
		return p + q * r * 21;
	};
	console.log(`${fn(a, x, 30)} ${fn(b, y, 45)}`);
};
