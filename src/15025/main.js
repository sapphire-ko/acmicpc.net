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
		const input = buffer[0].split(' ').map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = ([a, b]) => {
	const p = Math.max(a, b);
	if (p === 0) {
		console.log('Not a moose');
	} else {
		if (a === b) {
			console.log(`Even ${p * 2}`);
		} else {
			console.log(`Odd ${p * 2}`);
		}
	}
};
