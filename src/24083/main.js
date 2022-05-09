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

const main = ([a, b]) => {
	const p = (a + b) % 12;
	console.log(p === 0 ? 12 : p);
};
