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

const main = ([[k, n], ...input]) => {
	const p = input.flat();
	let q = -1;
	for (let x of p) {
		if (q > x) {
			continue;
		}
		q = x;
	}

	const fn2 = (x) => {
		return p.map((y) => Math.floor(y / x)).reduce((a, b) => a + b, 0);
	};

	if (fn2(q) >= n) {
		console.log(q);
		return;
	}

	const fn = (l, r) => {
		if (r - l <= 1) {
			return l;
		}
		const x = Math.floor((l + r) / 2);
		const q = fn2(x);
		if (q >= n) {
			return fn(x, r);
		} else {
			return fn(l, x);
		}
	};
	console.log(fn(1, q));
};
