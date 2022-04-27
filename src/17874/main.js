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

const main = ([n, h, v]) => {
	const p = Math.max(h, n - h);
	const q = Math.max(v, n - v);

	console.log(p * q * 4);
};
