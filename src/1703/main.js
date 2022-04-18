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
		const input = buffer.map((x) => x.split(' ').map((x) => parseInt(x, 10)));
		input.pop();
		main(input);
	});
})();

const main = (input) => {
	for (const [n, ...x] of input) {
		let s = 1;
		for (let i = 0; i < n; ++i) {
			const [p, q] = x.splice(0, 2);
			s = s * p - q;
		}
		console.log(s);
	}
};
