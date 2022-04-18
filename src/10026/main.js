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
		buffer.shift();
		const input = buffer.map((x) => x.split(''));
		main(input);
	});
})();

const fn2 = (t, x, y, k) => {
	// console.log(t, x, y, k);
	if (x < 0 || y < 0 || x >= t[0].length || y >= t.length) {
		return;
	}
	if (t[y][x] === '') {
		return;
	}
	if (t[y][x] !== k) {
		return;
	}
	t[y][x] = '';
	fn2(t, x - 1, y, k);
	fn2(t, x + 1, y, k);
	fn2(t, x, y - 1, k);
	fn2(t, x, y + 1, k);
};

const fn1 = (t) => {
	// let p = t[0][0];
	let k = 0;
	for (let i = 0; i < t[0].length; ++i) {
		for (let j = 0; j < t.length; ++j) {
			if (t[j][i] === '') {
				continue;
			}
			fn2(t, i, j, t[j][i]);
			k += 1;
		}
	}
	return k;
};

const main = (input) => {
	const p = input;
	const q = input.map((x) => x.map((x) => (x === 'G' ? 'R' : x)));
	console.log(`${fn1(p)} ${fn1(q)}`);
};
