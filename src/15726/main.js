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
		const input = buffer[0].split(' ').map((x) => BigInt(x));
		main(input);
	});
})();

const main = ([a, b, c]) => {
	if (b > c) {
		console.log(`${(a * b) / c}`);
	} else {
		console.log(`${(a * c) / b}`);
	}
};
