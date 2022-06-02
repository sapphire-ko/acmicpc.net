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

const main = ([[a1, c1, e1], [a2, c2, e2]]) => {
	const fn = () => {
		if (e2 < e1) {
			return 'E';
		}
		if (c2 < c1) {
			if (c2 < c1 / 2) {
				return 'E';
			}
			return 'D';
		}
		if (a2 < a1) {
			if (a2 < a1 / 2) {
				return 'C';
			}
			return 'B';
		}
		return 'A';
	};
	console.log(fn());
};
