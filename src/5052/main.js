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

const fn = (x) => {
	const p = x.sort((a, b) => a.localeCompare(b));
	for (let i = 1; i < p.length; ++i) {
		const a = p[i - 1];
		const b = p[i];
		if (b.startsWith(a)) {
			return 'NO';
		}
	}
	return 'YES';
};

const main = (input) => {
	const n = Number(input.shift());
	for (let i = 0; i < n; ++i) {
		const p = Number(input.shift());
		const q = input.splice(0, p);
		console.log(fn(q));
	}
};
