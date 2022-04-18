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
		const input = buffer.map((x) => x.split(' ').map((x) => parseInt(x, 10)));
		main(input);
	});
})();

const main = ([a, b]) => {
	const p = b[0] - a[0];
	const q = b[1] - a[1];
	const r = b[2] - a[2];

	if (q === 0) {
		if (r >= 0) {
			console.log(p);
		} else {
			console.log(p - 1);
		}
	} else if (q > 0) {
		console.log(p);
	} else {
		console.log(p - 1);
	}
	console.log(p + 1);
	console.log(p);
};
