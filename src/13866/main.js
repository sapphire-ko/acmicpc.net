const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split(' ').map((x) => parseInt(x, 10));
};

const main = () => {
	const input = read();

	const fn = (i, x) => {
		if (i === 4) {
			return Infinity;
		}
		const p = x.reduce((a, b) => a + b, 0);
		if (p === 0) {
			return Math.abs(x.map((y, i) => input[i] * y).reduce((a, b) => a + b, 0));
		}
		const y = [...x];
		const a = fn(i + 1, y);
		y[i] = -1;
		const b = fn(i + 1, y);
		return Math.min(a, b);
	};
	console.log(fn(0, [1, 1, 1, 1]));
};
main();
