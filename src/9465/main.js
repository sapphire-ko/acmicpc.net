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
		const input = buffer.map((x) => x.split(' ').map((x) => parseInt(x, 10)));
		main(input);
	});
})();

const main = (input) => {
	while (input.length > 0) {
		input.shift();
		const p = input.splice(0, 2);
		let q = -1;
		for (let i = 0; i < p[0].length; ++i) {
			p[0][i] = p[0][i] + Math.max(p[1][i - 1] ?? 0, p[1][i - 2] ?? 0);
			p[1][i] = p[1][i] + Math.max(p[0][i - 1] ?? 0, p[0][i - 2] ?? 0);
			q = Math.max(q, p[0][i], p[1][i]);
		}
		console.log(q);
	}
};
