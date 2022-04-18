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
		const input = buffer.map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = ([a, b, c, d]) => {
	const p = a === 8 || a === 9;
	const q = d === 8 || d === 9;
	const r = b === c;

	const s = p && q && r;

	console.log(s ? 'ignore' : 'answer');
};
