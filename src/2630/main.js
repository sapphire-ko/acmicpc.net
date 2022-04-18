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
		const input = buffer.map((x) => x.split(' '));
		main(input);
	});
})();

const fn1 = (t, x, y, k) => {
	const p = t[y][x];
	for (let i = x; i < x + k; ++i) {
		for (let j = y; j < y + k; ++j) {
			if (t[j][i] !== p) {
				return false;
			}
		}
	}
	return true;
};

const fn = (t, x, y, k) => {
	if (k === 1 || fn1(t, x, y, k)) {
		if (t[y][x] === '0') {
			return [1, 0];
		}
		return [0, 1];
	}
	return [
		fn(t, x, y, k / 2),
		fn(t, x + k / 2, y, k / 2),
		fn(t, x, y + k / 2, k / 2),
		fn(t, x + k / 2, y + k / 2, k / 2),
	].reduce((a, b) => [a[0] + b[0], a[1] + b[1]], [0, 0]);
};

const main = ([[n], ...input]) => {
	// console.log(n);
	// console.log(input);
	console.log(fn(input, 0, 0, n).join('\n'));
};
