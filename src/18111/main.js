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

const main = ([[n, m, b], ...input]) => {
	const t = {};
	const fn1 = (h) => {
		if (t[h]) {
			return [t[h], h];
		}
		let p = b;
		let q = 0;
		for (let i = 0; i < n; ++i) {
			for (let j = 0; j < m; ++j) {
				const x = input[i][j] - h;
				if (x === 0) {
					continue;
				}
				if (x > 0) {
					p += x;
					q += x * 2;
				} else {
					p += x;
					q += -x;
				}
			}
		}
		if (p < 0) {
			q = Infinity;
		}
		t[h] = q;
		return [t[h], h];
	};

	let p = -1;
	let q = Infinity;
	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < m; ++j) {
			const r = input[i][j];
			p = Math.max(p, r);
			q = Math.min(q, r);
		}
	}

	// const fn2 = (l, r) => {
	// 	if (l === r) {
	// 		return fn1(l);
	// 	}
	// 	if (r - l <= 1) {
	// 		const p = fn1(l);
	// 		const q = fn1(r);
	// 		if (p[0] < q[0]) {
	// 			return p;
	// 		}
	// 		return q;
	// 	}
	// 	const x = Math.floor((l + r) / 2);

	// 	const p = fn1(l);
	// 	const q = fn1(x);
	// 	const s = fn1(r);

	// 	if(p < q) {
	// 		if(q < s) {
	// 			return fn2(l, x);
	// 		}
	// 		else {
	// 			return Infinity;
	// 		}
	// 	}
	// 	else {
	// 		if(q < s) {

	// 		}
	// 	}
	// };
	// fn2(p, q);
	let s = Infinity;
	let h = -1;
	for (let i = p; i >= q; --i) {
		const [k] = fn1(i);
		if (k < s) {
			s = k;
			h = i;
		}
	}
	console.log(`${s} ${h}`);
};
