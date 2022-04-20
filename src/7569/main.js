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

const fn2 = (t, x, y, z, k) => {
	if (x < 0 || x >= t[0][0].length) {
		return k;
	}
	if (y < 0 || y >= t[0].length) {
		return k;
	}
	if (z < 0 || z >= t.length) {
		return k;
	}
	console.log('t[z][y][x]', t[z][y][x], k);
	if (t[z][y][x] === -1) {
		return k;
	}
	if((t[z][y][x] !== 0 && t[z][y][x] !== 1) && t[z][y][x] <= k) {
		return k;
	}
	t[z][y][x] = k;
	fn2(t, x + 1, y, z, k + 1);
	fn2(t, x - 1, y, z, k + 1);
	fn2(t, x, y + 1, z, k + 1);
	fn2(t, x, y - 1, z, k + 1);
	fn2(t, x, y, z + 1, k + 1);
	fn2(t, x, y, z - 1, k + 1);
};

const fn1 = (t) => {
	let p = 0;
	for (let i = 0; i < t[0][0].length; ++i) {
		for (let j = 0; j < t[0].length; ++j) {
			for (let k = 0; k < t.length; ++k) {
				if (t[k][j][i] === 1) {
					p = Math.max(p, fn2(t, i, j, k, 1));
				}
			}
		}
	}
	return p;
};

const fn3 = (t) => {
	return t.some((x) => x.some((x) => x.some((x) => x === 0)));
};

const main = ([[m, n, h], ...input]) => {
	const t = [];
	while (input.length > 0) {
		t.push(input.splice(0, h));
	}
	const p = fn1(t);
	console.log(t);
	const q = fn3(t);
	console.log(q ? -1 : p);
};
