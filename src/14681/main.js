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
		const input = buffer
			.join('\n')
			.split('\n')
			.map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = ([x, y]) => {
	if (x > 0) {
		if (y > 0) {
			console.log(1);
		} else {
			console.log(4);
		}
	} else {
		if (y > 0) {
			console.log(2);
		} else {
			console.log(3);
		}
	}
};
