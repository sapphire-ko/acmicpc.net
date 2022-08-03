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
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = ([[N, M], A]) => {
	const p = [];
	for (let i = 0; i < A.length; ++i) {
		if (i === 0) {
			p.push(A[i]);
		} else {
			p.push(p[i - 1] + A[i]);
		}
	}

	const fn1 = (l, r) => {
		return p[r] - (p[l - 1] ?? 0);
	};

	const fn2 = (i) => {
		let l = i;
		let r = A.length - 1;
		while (l <= r) {
			const m = Math.floor((l + r) / 2);
			const p = fn1(i, m);
			if (p === M) {
				return m;
			}
			if (p < M) {
				l = m + 1;
			} else {
				r = m - 1;
			}
		}
		return r;
	};

	let c = 0;
	for (let i = 0; i < A.length; ++i) {
		const j = fn2(i);
		const r = fn1(i, j);
		if (r === M) {
			c += 1;
			continue;
		}
	}
	console.log(c);
};
