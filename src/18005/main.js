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
		const input = Number(buffer[0]);
		main(input);
	});
})();

const main = (input) => {
	if (input % 2 === 1) {
		console.log(0);
	} else {
		const p = input / 2;
		if (p % 2 === 0) {
			console.log(2);
		} else {
			console.log(1);
		}
	}
};
