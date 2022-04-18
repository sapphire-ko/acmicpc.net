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
		buffer.shift();
		const input = buffer.map((x) => parseInt(x, 10));
		main(input);
	});
})();

const fn_t = (x) => {
	return (x * (x + 1)) / 2;
};

const main = (input) => {
	const t = {
		0: 0,
	};
	for (const x of input) {
		for (let i = 1; i <= x; ++i) {
			if (!t[i]) {
				t[i] = t[i - 1] + i * fn_t(i + 1);
			}
		}
		console.log(t[x]);
	}
};
