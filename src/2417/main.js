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
		const input = BigInt(buffer[0]);
		main(input);
	});
})();

const main = (input) => {
	if (input === 1n) {
		console.log(1);
		return;
	}
	const fn = (l, r) => {
		if (r - l <= 1n) {
			return r;
		}
		const x = (l + r) / 2n;
		if (x * x >= input) {
			return fn(l, x);
		}
		return fn(x, r);
	};
	console.log(`${fn(0n, input)}`);
};
