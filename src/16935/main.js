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

const fn1 = (n, m, t) => {
	return t.reverse();
};

const fn2 = (n, m, t) => {
	return t.map((x) => x.reverse());
};

const fn3 = (n, m, t) => {
	let p = [];
	for (let i = 0; i < m; ++i) {
		let q = [];
		for (let j = 0; j < n; ++j) {
			q.push(t[n - 1 - j][i]);
		}
		p.push(q);
	}
	return p;
};

const fn4 = (n, m, t) => {
	let p = [];
	for (let i = 0; i < m; ++i) {
		let q = [];
		for (let j = 0; j < n; ++j) {
			q.push(t[j][m - 1 - i]);
		}
		p.push(q);
	}
	return p;
};

const fn5 = (n, m, t) => {
	let p = [];
	for (let i = 0; i < n; ++i) {
		let q = [];
		for (let j = 0; j < m; ++j) {
			if (i < n / 2) {
				if (j < m / 2) {
					q.push(t[i + n / 2][j]);
				} else {
					q.push(t[i][j - m / 2]);
				}
			} else {
				if (j < m / 2) {
					q.push(t[i][j + m / 2]);
				} else {
					q.push(t[i - n / 2][j]);
				}
			}
		}
		p.push(q);
	}
	return p;
};

const fn6 = (n, m, t) => {
	let p = [];
	for (let i = 0; i < n; ++i) {
		let q = [];
		for (let j = 0; j < m; ++j) {
			if (i < n / 2) {
				if (j < m / 2) {
					q.push(t[i][j + m / 2]);
				} else {
					q.push(t[i + n / 2][j]);
				}
			} else {
				if (j < m / 2) {
					q.push(t[i - n / 2][j]);
				} else {
					q.push(t[i][j - m / 2]);
				}
			}
		}
		p.push(q);
	}
	return p;
};

const main = ([[n, m, r], ...input]) => {
	let t = input.splice(0, n);
	const k = input[0];

	const getFn = (n) => {
		switch (n) {
			case 1: {
				return fn1;
			}
			case 2: {
				return fn2;
			}
			case 3: {
				return fn3;
			}
			case 4: {
				return fn4;
			}
			case 5: {
				return fn5;
			}
			case 6: {
				return fn6;
			}
		}
	};

	for (const a of k) {
		const fn = getFn(a);
		const n = t.length;
		const m = t[0].length;
		t = fn(n, m, t);
	}

	console.log(t.map((x) => x.join(' ')).join('\n'));
};
