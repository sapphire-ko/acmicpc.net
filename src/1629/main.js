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
	const fn = (x) => {
		if (x === 1n) {
			return a % c;
		}
		if (x % 2n === 1n) {
			const p = fn((x - 1n) / 2n);
			return (p * p * a) % c;
		} else {
			const p = fn(x / 2n);
			return (p * p) % c;
		}
	};
	console.log(Number(fn(b)));
};
