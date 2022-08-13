(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
	});
	const buffer = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = (input) => {
	const [K] = input.shift();
	for (let i = 0; i < K; ++i) {
		const [n, s, d] = input.shift();
		const p = s * d;
		let q = 0;
		for (let j = 0; j < n; ++j) {
			const [d, v] = input.shift();
			if (d <= p) {
				q += v;
			}
		}
		console.log(`Data Set ${i + 1}:\n${q}\n`);
	}
};
