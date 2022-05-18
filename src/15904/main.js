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
		const input = buffer[0];
		main(input);
	});
})();

const main = (input) => {
	const p = 'UCPC';
	let q = 0;
	for (let s of input) {
		if (p[q] === s) {
			++q;
		}
	}
	console.log(q === 4 ? 'I love UCPC' : 'I hate UCPC');
};
