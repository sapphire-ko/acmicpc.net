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

const main = ([[n], k, [m]]) => {
	const p = Math.floor(m / n);
	const q = Math.max(...k);

	const t = {};
	const fn2 = (x) => {
		if (t[x] === undefined) {
			t[x] = k.reduce((a, b) => a + Math.min(b, x), 0);
		}
		return t[x];
	};

	const fn1 = (l, r) => {
		if (l === r) {
			return l;
		}
		if (l + 1 === r) {
			return l;
		}
		const p = fn2(r);
		if (p <= m) {
			return r;
		}

		const t = Math.floor((l + r) / 2);
		const q = fn2(t);

		if (q <= m) {
			return fn1(t, r);
		} else {
			return fn1(l, t);
		}
	};

	console.log(fn1(p, q));
};
