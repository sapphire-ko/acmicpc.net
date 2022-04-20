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

const fn2 = (t, x, y) => {
	if (x < 0 || y < 0 || x >= t.length || y >= t[0].length) {
		return 0;
	}
	if (t[y][x] !== '1') {
		return 0;
	}
	t[y][x] = '2';
	return 1 + fn2(t, x - 1, y) + fn2(t, x + 1, y) + fn2(t, x, y - 1) + fn2(t, x, y + 1);
};

const main = (input) => {
	const p = [];
	for (let i = 0; i < input.length; ++i) {
		for (let j = 0; j < input[0].length; ++j) {
			if (input[j][i] !== '1') {
				continue;
			}
			p.push(fn2(input, i, j));
		}
	}
	console.log(p.length);
	console.log(p.sort((a, b) => a - b).join('\n'));
};
