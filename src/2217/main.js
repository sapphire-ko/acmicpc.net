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
		buffer.shift();
		const input = buffer.map((x) => parseInt(x, 10)).sort((a, b) => b - a);
		main(input);
	});
})();

const main = (input) => {
	let p = 0;
	let q = input[0];
	for (let i = 1; i < input.length; ++i) {
		const x = input[i];
		const r = x * (i + 1);
		if (q <= r) {
			p = i;
			q = r;
		}
		// console.log(p, q);
	}
	console.log(q);
};
