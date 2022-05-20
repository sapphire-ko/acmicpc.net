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
		const input = buffer;
		main(input);
	});
})();

const main = (input) => {
	const [n, m] = input[0].split(' ').map(Number);
	const t = input.splice(1);

	const fn = (y, x) => {
		if (n <= y) {
			return -1;
		}
		if (m <= x) {
			return -1;
		}

		let k = -1;
		for (let i = y; i < n; ++i) {
			for (let j = x; j < m; ++j) {
				const p = t[y][x];
				const q = t[i][x];
				const r = t[y][j];
				const s = t[i][j];

				if (p !== q || p !== r || p !== s) {
					continue;
				}
				const a = i - y + 1;
				const b = j - x + 1;
				if(a !== b) {
					continue;
				}
				k = Math.max(k, a * b);
			}
		}
		return k;
	};

	let k = -1;
	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < m; ++j) {
			k = Math.max(k, fn(i, j));
		}
	}
	console.log(k);
};
