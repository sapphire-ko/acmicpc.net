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
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = ([[L], S, [n]]) => {
	if (S.includes(n)) {
		console.log(0);
		return;
	}

	const p = S.slice().sort((a, b) => a - b);

	const q = p.find((x) => x > n);
	const r = p
		.slice()
		.reverse()
		.find((x) => x < n) ?? 0;

	const s = q - 1 - n + 1;
	const t = n - 1 - r + 1;

	console.log(s * t - 1);
};
