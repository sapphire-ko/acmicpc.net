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

const main = ([a, b]) => {
	const p = Math.max(b[0] - a[0], 0);
	const q = Math.max(b[1] - a[1], 0);
	const r = Math.max(b[2] - a[2], 0);

	console.log(p + q + r);
};
