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

const fn = (x, k) => {
	for (let i = 2n; i * i <= x; ++i) {
		if (i >= k) {
			return k;
		}
		if (x % i === 0n) {
			return i;
		}
	}
	return -1n;
};

const main = ([p, k]) => {
	const x = fn(p, k);
	console.log(x < k ? `BAD ${x}` : 'GOOD');
};
