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

const main = ([s, a, b]) => {
	let p = 250;
	if (a >= s) {
		console.log(p);
		return;
	}
	const q = Math.ceil((s - a) / b);
	console.log(p + q * 100);
};
