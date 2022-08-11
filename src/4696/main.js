(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
	});
	const buffer = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		buffer.pop();
		const input = buffer.map(Number);
		main(input);
	});
})();

const main = (input) => {
	for (const p of input) {
		const q = 1 + p + p * p + p * p * p + p * p * p * p;
		console.log(q.toFixed(2));
	}
};
