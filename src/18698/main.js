(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
	});
	const buffer = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		buffer.shift();
		const input = buffer;
		main(input);
	});
})();

const main = (input) => {
	for (const p of input) {
		let count = 0;
		for (const q of p) {
			if (q === 'D') {
				break;
			}
			count += 1;
		}
		console.log(count);
	}
};
