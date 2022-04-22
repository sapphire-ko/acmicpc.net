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
		buffer.shift();
		const input = buffer.map(Number);
		main(input);
	});
})();

const main = (input) => {
	console.log(input.sort((a, b) => a - b).join('\n'));
};
