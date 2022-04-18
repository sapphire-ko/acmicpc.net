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
		const input = buffer[0].split('/').map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = ([k, d, a]) => {
	if (d === 0 || k + a < d) {
		console.log('hasu');
	} else {
		console.log('gosu');
	}
};
