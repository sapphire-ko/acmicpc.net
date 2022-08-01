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
		const input = Number(buffer[0]);
		main(input);
	});
})();

const main = (input) => {
	const t = [
		[100_000_000, 788888898],
		[10_000_000, 68888897],
		[1_000_000, 5888896],
		[100_000, 488895],
		[10_000, 38894],
		[1_000, 2893],
		[100, 192],
		[10, 11],
		[1, 1],
	];
	for (const [p, q] of t) {
		if (input < p) {
			continue;
		}
		const r = `${p}`.length;
		const s = input - p;
		console.log(q + r * s);
		return;
	}
};
