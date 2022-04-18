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

const fn = (v, a, b) => {
	const p = v - a;
	const q = a - b;

	if (p % q === 0n) {
		return p / q;
	} else {
		return p / q + 1n;
	}
};

const main = ([a, b, v]) => {
	const p = v % (a - b);
	const q = fn(v, a, b);
	// console.log(p, q);

	console.log(Number(q) + 1);
};
