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
		const input = buffer[0].split(' ').map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = ([n, a, b, c, d]) => {
	const p = Math.ceil(n / a) * b;
	const q = Math.ceil(n / c) * d;

	console.log(Math.min(p, q));
};
