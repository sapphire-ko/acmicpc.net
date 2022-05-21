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
	let p = a / b;
	let q = a % b;
	if (q < 0n) {
		if (b < 0n) {
			p = p + 1n;
			q = q - b;
		} else {
			p = p - 1n;
			q = q + b;
		}
	}
	console.log(`${p}\n${q}`);
};
