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
		const input = buffer;
		main(input);
	});
})();

const main = (input) => {
	const [n, m] = input
		.splice(0, 1)[0]
		.split(' ')
		.map((x) => parseInt(x, 10));
	const p = Object.fromEntries(input.splice(0, n).map((x) => x.split(' ')));
	for (const x of input) {
		const q = p[x];
		console.log(q);
	}
};
