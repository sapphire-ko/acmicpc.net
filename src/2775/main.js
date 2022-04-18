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
		const input = buffer.map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = (input) => {
	while (input.length > 0) {
		const [k, n] = input.splice(0, 2);

		const t = {
			0: {},
		};

		for (let i = 1; i <= k; ++i) {
			t[i] = {};
			for (let j = 1; j <= n; ++j) {
				if (i === 1) {
					t[0][j] = j;
				}
				if (j === 1) {
					t[i][1] = t[i - 1][1];
				} else {
					t[i][j] = t[i - 1][j] + t[i][j - 1];
				}
			}
		}
		console.log(t[k][n]);
	}
};
