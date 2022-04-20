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
		const input = parseInt(buffer[0], 10);
		main(input);
	});
})();

const main = (input) => {
	const t = {};
	const fn = (x) => {
		if (x === 1) {
			return 1n;
		}
		if (x === 2) {
			return 1n;
		}
		if (!t[x]) {
			t[x] = fn(x - 1) + fn(x - 2);
		}
		return t[x];
	};
	console.log(`${fn(input)}`);
};
