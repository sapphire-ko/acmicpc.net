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

const main = (input) => {
	const a = Math.min(input[0][0], input[0][1]);
	const b = Math.max(input[0][0], input[0][1]);

	const [x, y] = input[1];

	const p = x < 0 ? (a + -x) % -x : (a + x) % x;
	// console.log('p', p);

	const q = a + p + y;
	// console.log('q', q);
	if (q < a || b < q) {
		console.log('Unknwon Number');
		return;
	}

	const r = q + (x < 0 ? -x : x);
	// console.log('r', r);
	if (a <= r && r <= b) {
		console.log('Unknwon Number');
		return;
	}

	console.log(q);
};
