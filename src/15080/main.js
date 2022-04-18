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
		const input = buffer.map((x) => x.split(':').map((x) => parseInt(x.trim(), 10)));
		main(input);
	});
})();

const fn = ([a, b, c]) => {
	return a * 3600 + b * 60 + c;
};

const main = ([a, b]) => {
	const p = fn(a);
	const q = fn(b);

	const r = (q - p + 24 * 3600) % (24 * 3600);
	console.log(r);
};
