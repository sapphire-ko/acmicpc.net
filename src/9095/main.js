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
		const input = buffer;
		main(input);
	});
})();

const main = (input) => {
	input.shift();

	const t = {
		1: 1,
		2: 2,
		3: 4,
	};
	const fn = (x) => {
		if (!t[x]) {
			t[x] = fn(x - 1) + fn(x - 2) + fn(x - 3);
		}
		return t[x];
	};

	while (input.length > 0) {
		console.log(fn(input.shift()));
	}
};
