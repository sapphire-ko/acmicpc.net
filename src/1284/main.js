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
		const input = buffer.map((x) => x.split(''));
		input.pop();
		main(input);
	});
})();

const main = (input) => {
	for (const x of input) {
		const p = x.reduce((a, b) => a + (b === '1' ? 2 : b === '0' ? 4 : 3), 0) + (x.length + 1);
		console.log(p);
	}
};
