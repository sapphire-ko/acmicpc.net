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
	let i = 666;
	let c = 1;
	while (true) {
		if (input === c) {
			console.log(i);
			return i;
		}
		i += 1;
		if (`${i}`.includes('666')) {
			c += 1;
		}
	}
};
