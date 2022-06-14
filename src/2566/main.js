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

const main = (input) => {
	const p = Math.max(...input.flat());

	const q = input.findIndex((x) => x.some((x) => x === p));
	const r = input[q].findIndex((x) => x === p);

	console.log(p);
	console.log(q + 1, r + 1);
};
