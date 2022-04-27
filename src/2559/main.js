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
	let p = input[1].filter((x, i) => i < input[0][1]).reduce((a, b) => a + b, 0);
	let q = p;
	for (let i = 1; i < input[0][0] - input[0][1] + 1; ++i) {
		p = p - input[1][i - 1] + input[1][i + input[0][1] - 1];
		q = Math.max(q, p);
	}
	console.log(q);
};
