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

const main = ([[n], ...input]) => {
	if (n === 1) {
		console.log(input[0][0]);
		return;
	}
	const q = input.map((x) => x.map((x) => ({ a: -1, b: x })));
	const fn = (x) => {
		let p = -1;
		for (let i = 0; i <= x; ++i) {
			const a = q[x - 1][i - 1]?.a ?? -1;
			const b = q[x - 1][i]?.a ?? -1;
			q[x][i].a = Math.max(a, b) + q[x][i].b;
			if (x === n - 1) {
				p = Math.max(p, q[x][i].a);
			}
		}
		if (x === n - 1) {
			return p;
		}
		return fn(x + 1);
	};
	q[0][0].a = q[0][0].b;
	console.log(fn(1));
};
