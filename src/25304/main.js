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

const main = ([[x], [n], ...p]) => {
	const q = p.map(([a, b]) => a * b).reduce((a, b) => a + b, 0);
	console.log(x === q ? 'Yes' : 'No');
};
