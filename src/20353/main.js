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
	const p = Math.sqrt(input);
	console.log(p * 4);
};
