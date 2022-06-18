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
		const input = buffer.map(Number);
		main(input);
	});
})();

const main = ([p, q]) => {
	if (p <= 50 && q <= 10) {
		console.log('White');
	} else if (q > 30) {
		console.log('Red');
	} else {
		console.log('Yellow');
	}
};
