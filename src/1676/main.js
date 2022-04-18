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
		const input = parseInt(buffer, 10);
		main(input);
	});
})();

const main = (input) => {
	let n = 0;
	for (let i = 1; i <= input; ++i) {
		if (i % 125 === 0) {
			n += 3;
			continue;
		}
		if (i % 25 === 0) {
			n += 2;
			continue;
		}
		if (i % 5 === 0) {
			n += 1;
			continue;
		}
	}
	console.log(n);
};
