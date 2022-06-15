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
		const input = buffer[1];
		main(input);
	});
})();

const main = (input) => {
	const p = input.split('').filter((x) => ['a', 'e', 'i', 'o', 'u'].includes(x)).length;
	console.log(p);
};
