(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
	});
	const buffer = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		buffer.shift();
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = (input) => {
	for (const [p, q] of input) {
		console.log(p + q);
	}
};
