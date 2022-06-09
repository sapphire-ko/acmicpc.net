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
		const input = buffer[0].split(' ').map(BigInt);
		main(input);
	});
})();

const main = ([a, b]) => {
	if (a + 1n <= b) {
		console.log(`${a + 1n}`);
	} else {
		console.log(`${b}`);
	}
};
