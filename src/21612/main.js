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
		const input = Number(buffer[0]);
		main(input);
	});
})();

const main = (b) => {
	const p = 5 * b - 400;
	console.log(p);
	if (p === 100) {
		console.log(0);
	} else if (p > 100) {
		console.log(-1);
	} else {
		console.log(1);
	}
};
