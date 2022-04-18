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
		const input = buffer[0]
			.split(' ')
			.map((x) => parseInt(x, 10))
			.sort((a, b) => b - a);
		main(input);
	});
})();

const main = ([a, b, c, d]) => {
	const p = Math.min(a, b) * Math.min(c, d);
	const q = Math.min(a, c) * Math.min(b, d);

	console.log(Math.max(p, q));
};
