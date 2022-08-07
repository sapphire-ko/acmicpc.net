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
		buffer.pop();
		const input = buffer.map((x) => x.split(' ').map(BigInt));
		main(input);
	});
})();

const main = (input) => {
	const t = {
		1: 1n,
		2: 2n,
	};
	const u = {
		[1n]: 1,
		[2n]: 2,
	};
	const fn = (x) => {
		if (!(x in t)) {
			t[x] = fn(x - 1) + fn(x - 2);
			u[t[x]] = u[t[x - 1]] + 1;
		}
		return t[x];
	};
	for (const [p, q] of input) {
		let i = 1;
		let j = 1;
		while (true) {
			const x = fn(i);
			if (x >= p) {
				break;
			}
			i += 1;
		}
		while (true) {
			const y = fn(j);
			if (y > q) {
				break;
			}
			j += 1;
		}
		console.log(j - i);
	}
};
