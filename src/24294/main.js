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
		const input = buffer.map(Number);
		main(input);
	});
})();

const main = ([w1, h1, w2, h2]) => {
	const p = Math.max(w1, w2);
	const q = h1 + h2;

	console.log(p * 2 + q * 2 + 4);
};
