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

const main = ([s, m, l]) => {
	const p = s * 1 + m * 2 + l * 3;
	console.log(p >= 10 ? 'happy' : 'sad');
};
