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

const main = ([[n, m, r], ...t]) => {
	const fn4 = () => {
		const p = [];
		for (let i = 0; i < n; ++i) {
			const q = [];
			for (let j = 0; j < m; ++j) {
				q.push(Infinity);
			}
			p.push(q);
		}

		for (let i = 0; i < n; ++i) {
			for (let j = 0; j < m; ++j) {
				const q = Math.ceil(m / 2);
				const r = j < q ? j + 1 : m - j;
				p[i][j] = Math.min(p[i][j], r);
			}
		}

		for (let j = 0; j < m; ++j) {
			for (let i = 0; i < n; ++i) {
				const q = Math.ceil(n / 2);
				const r = i < q ? i + 1 : n - i;
				p[i][j] = Math.min(p[i][j], r);
			}
		}

		return p;
	};
	const u = fn4();

	const fn3 = () => {
		for (let a = 0; a < i; ++i) {}
	};

	const fn2 = (i, j) => {};

	const fn1 = () => {
		const p = [];
		for (let i = 0; i < t.length; ++i) {
			const q = [];
			for (let j = 0; j < t[i].length; ++j) {
				q.push(fn2(i, j));
			}
			p.push(q);
		}
		return p;
	};

	console.log(fn1());
};
