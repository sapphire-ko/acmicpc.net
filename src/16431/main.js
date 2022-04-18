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

const main = ([b, d, j]) => {
	const p = Math.max(Math.abs(j[0] - b[0]), Math.abs(j[1] - b[1]));
	const q = Math.abs(j[0] - d[0]) + Math.abs(j[1] - d[1]);

	if (p === q) {
		console.log('tie');
	} else if (p > q) {
		console.log('daisy');
	} else {
		console.log('bessie');
	}
};
