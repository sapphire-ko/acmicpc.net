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
		const input = buffer[0]
			.split(' ')
			.map((x) => parseInt(x, 10))
			.sort((a, b) => b - a);
		main(input);
	});
})();

const main = (input) => {
	console.log(input[0] + input[1]);
};
