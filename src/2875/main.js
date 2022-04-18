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
		const input = buffer[0].split(' ').map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = ([n, m, k]) => {
	const p = Math.floor(n / 2);
	const q = Math.min(p, m);

	const r = n + m - (2 + 1) * q;
	if (k <= r) {
		console.log(q);
	} else {
		const s = k - r;
		console.log(q - Math.ceil(s / 3));
	}
};
