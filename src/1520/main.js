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
		const input = buffer.map((x) => x.split(' ').map((x) => ({ a: -1, b: parseInt(x, 10) })));
		main(input);
	});
})();

const main = (input) => {
	const fn = (t, x, y, k) => {
		if (x < 0 || y < 0 || x >= t[0].length || y >= t.length) {
			return 0;
		}
		if (t[y][x].b >= k) {
			return 0;
		}
		if (x === t[0].length - 1 && y === t.length - 1) {
			return 1;
		}
		if (t[y][x].a === -1) {
			const l = t[y][x].b;
			t[y][x].a = fn(t, x - 1, y, l) + fn(t, x + 1, y, l) + fn(t, x, y - 1, l) + fn(t, x, y + 1, l);
		}
		return t[y][x].a;
	};
	console.log(fn(input, 0, 0, Infinity));
};
