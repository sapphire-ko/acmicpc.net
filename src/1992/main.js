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
		return t[y][x];
	}
	return `(${[
		fn(t, x, y, k / 2),
		fn(t, x + k / 2, y, k / 2),
		fn(t, x, y + k / 2, k / 2),
		fn(t, x + k / 2, y + k / 2, k / 2),
	].join('')})`;
};

const main = (input) => {
	console.log(fn(input, 0, 0, input.length));
};
