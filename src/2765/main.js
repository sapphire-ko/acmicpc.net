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
		const input = buffer.map((x) => x.split(' ').map((x) => parseFloat(x, 10)));
		main(input);
	});
})();

const pi = 3.1415927;

const main = (input) => {
	for (const [i, [r, c, t]] of Object.entries(input)) {
		const p = (r * pi * c) / (5280 * 12);
		const q = p / (t / 3600);
		console.log(`Trip #${parseInt(i, 10) + 1}: ${p.toFixed(2)} ${q.toFixed(2)}`);
	}
};
