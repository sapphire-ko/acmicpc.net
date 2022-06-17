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
		const input = Number(buffer[0].split(' ')[0]);
		main(input);
	});
})();

const main = (input) => {
	console.log(input >= 8 ? 'satisfactory' : 'unsatisfactory');
};
