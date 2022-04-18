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
		const input = buffer.map((x) => x.split(' ').map((x) => parseInt(x, 10)));
		main(input);
	});
})();

const main = ([[a1, p1], [r1, p2]]) => {
	const p = a1 / p1;
	const q = (Math.pow(r1, 2) * Math.PI) / p2;

	console.log(p > q ? 'Slice of pizza' : 'Whole pizza');
};
