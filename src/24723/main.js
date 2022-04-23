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
		const input = parseInt(buffer[0], 10);
		main(input);
	});
})();

const main = (input) => {
	console.log(Math.pow(2, input));
};
