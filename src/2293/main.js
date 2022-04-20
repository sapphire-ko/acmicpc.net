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
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = ([[n, k], ...input]) => {
	const p = input.flat().reverse();
	const fn = () => {
		const t = [];
		for (let i = 0; i <= p.length; ++i) {
			t[i] = [];
			for (var j = 0; j <= k; ++j) {
				t[i].push(j === 0 ? 1 : 0);
			}
		}
		for (let i = 1; i <= p.length; ++i) {
			for (let j = 1; j <= k; ++j) {
				if (p[i - 1] <= j) {
					t[i][j] = t[i - 1][j] + t[i][j - p[i - 1]];
				} else {
					t[i][j] = t[i - 1][j];
				}
			}
		}
		return t[p.length][k];
	};
	console.log(fn());
};
