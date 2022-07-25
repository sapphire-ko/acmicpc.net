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

const main = ([[N, n, P], x]) => {
	if (N === 0) {
		console.log(1);
		return;
	}

	if (N === P && x[P - 1] >= n) {
		console.log(-1);
		return;
	}

	let c = 1;
	for (let i = 0; i < N; ++i) {
		if (x[i] <= n) {
			break;
		}
		c += 1;
	}

	console.log(c);
};
