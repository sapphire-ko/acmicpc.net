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
		const input = buffer[1]
			.split(' ')
			.map((x) => parseInt(x, 10))
			.sort((a, b) => a - b);
		main(input);
	});
})();

const main = (input) => {
	let p = [input[0]];
	for (let i = 1; i < input.length; ++i) {
		p.push(p[i - 1] + input[i]);
		// console.log(i, input[i], p);
	}
	console.log(p.reduce((a, b) => a + b, 0));
};
