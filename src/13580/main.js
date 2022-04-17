const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split(' ').map((x) => parseInt(x, 10));
};

const main = () => {
	const [a, b, c] = read();

	const fn = (i, x) => {
		if(i > 3) {
			return false;
		}
		if (!(x[0] === 0 && x[1] === 0 && x[2] === 0)) {
			const k = a * x[0] + b * x[1] + c * x[2];
			if (k === 0) {
				return true;
			}
		}
		const y = [...x];
		y[i] = 1;
		if (fn(i + 1, y)) {
			return true;
		}
		y[i] = -1;
		if (fn(i + 1, y)) {
			return true;
		}
		y[i] = 0;
		if (fn(i + 1, y)) {
			return true;
		}
		return false;
	};
	console.log(fn(0, [0, 0, 0]) ? 'S' : 'N');
};
main();
