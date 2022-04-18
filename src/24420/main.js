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
	const p = [...input];
	p.shift();
	p.pop();
	console.log(p.reduce((a, b) => a + b, 0));
};
