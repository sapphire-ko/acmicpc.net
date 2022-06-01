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
		const input = buffer[0].split(' ').map(Number);
		main(input);
	});
})();

const main = ([t1, m1, t2, m2]) => {
	const p = t1 * 60 + m1;
	const q = t2 * 60 + m2;

	const r = (q + 24 * 60 - p) % (24 * 60);

	console.log(r, Math.floor(r / 30));
};
