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
		const input = buffer.map((x) => x.split('').map((x) => parseInt(x, 10)));
		main(input);
	});
})();

const main = (input) => {
	const xx = input[0].length - 1;
	const yy = input.length - 1;

	const fn = (x, y, k) => {
		if (x === xx && y === yy) {
			return k;
		}
		if (k !== 1 && x === 0 && y === 0) {
			return Infinity;
		}
		if (x > xx || x < 0 || y > yy || y < 0 || input[y][x] === 0) {
			return Infinity;
		}
		if (input[y][x] !== 1 && input[y][x] <= k) {
			return Infinity;
		}
		input[y][x] = k;
		const a = fn(x, y + 1, k + 1);
		const b = fn(x, y - 1, k + 1);
		const c = fn(x + 1, y, k + 1);
		const d = fn(x - 1, y, k + 1);
		return Math.min(a, b, c, d);
	};
	console.log(fn(0, 0, 1));
};
