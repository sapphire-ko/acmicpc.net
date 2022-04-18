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
		const input = buffer[0].split(' ').map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = ([p1, q1, p2, q2]) => {
	const p = p1 * p2;
	const q = q1 * q2;
	console.log((p / 2) % q === 0 ? 1 : 0);
};
