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

const main = (input) => {
	const p = input[0] * 7;
	const q = input[1] * 13;

	if (p === q) {
		console.log('lika');
	} else {
		console.log(p < q ? 'Petra' : 'Axel');
	}
};
