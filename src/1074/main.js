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
		const input = buffer[0].split(' ').map(Number);
		main(input);
	});
})();

const main = ([n, r, c]) => {
	const fn = (n, x, y, i) => {
		// console.log(n, x, y, i);
		if (n === 0) {
			return i;
		}
		const m = Math.pow(2, n - 1);
		if (r < x + m) {
			if (c < y + m) {
				return fn(n - 1, x + 0, y + 0, i + m * m * 0);
			} else {
				return fn(n - 1, x + 0, y + m, i + m * m * 1);
			}
		} else {
			if (c < y + m) {
				return fn(n - 1, x + m, y + 0, i + m * m * 2);
			} else {
				return fn(n - 1, x + m, y + m, i + m * m * 3);
			}
		}
	};
	console.log(fn(n, 0, 0, 0));
};
