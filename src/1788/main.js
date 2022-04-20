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
	let p = 0n;
	let q = 1n;
	if (input === 0) {
		console.log(0);
		console.log(0);
		return;
	}
	if (input === 1) {
		console.log(1);
		console.log(1);
		return;
	}
	if (input < 0) {
		for (let i = -1; i >= input; --i) {
			const r = (q - p) % 1_000_000_000n;
			q = p;
			p = r;
		}
		console.log(p === 0n ? 0 : p < 0n ? -1 : 1);
		console.log(Math.abs(Number(p)));
	} else {
		for (let i = 1; i < input; ++i) {
			const r = (p + q) % 1_000_000_000n;
			p = q;
			q = r;
		}
		console.log(q === 0n ? 0 : q < 0n ? -1 : 1);
		console.log(Math.abs(Number(q)));
	}
};
