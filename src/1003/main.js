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

const main = (input) => {
	const t = {
		0: [1, 0],
		1: [0, 1],
	};
	for (const x of input) {
		for (let i = 2; i <= x; ++i) {
			if (t[i]) {
				continue;
			}
			const p = t[i - 1];
			const q = t[i - 2];
			t[i] = [p[0] + q[0], p[1] + q[1]];
		}
		console.log(t[x].join(' '));
	}
};
