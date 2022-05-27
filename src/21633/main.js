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
		const input = Number(buffer);
		main(input);
	});
})();

const main = (input) => {
	const p = input * 0.01;
	const q = p + 25;
	const r = Math.max(100, Math.min(2000, q));
	console.log(r.toFixed(2));
};
