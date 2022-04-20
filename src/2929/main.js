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
		const input = buffer[0];
		main(input);
	});
})();

const main = (input) => {
	const p = input.match(/[A-Z][a-z]*/g);
	p.pop();
	const q = p
		.map((x) => {
			return (4 - (x.length % 4)) % 4;
		})
		.reduce((a, b) => a + b, 0);
	console.log(q);
};
