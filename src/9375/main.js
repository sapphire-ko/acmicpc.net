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
		const input = buffer.map((x) => x.split(' '));
		main(input);
	});
})();

const main = (input) => {
	while (input.length > 0) {
		const [n] = input.shift();
		const t = {};
		for (let i = 0; i < n; ++i) {
			const [p, q] = input.shift();
			if (!t[q]) {
				t[q] = [];
			}
			t[q].push(p);
		}
		const p =
			Object.values(t)
				.map((x) => x.length + 1)
				.reduce((a, b) => a * b, 1) - 1;
		console.log(p);
	}
};
