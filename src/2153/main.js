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

const fn = (x) => {
	for (let i = 2; i <= Math.sqrt(x); ++i) {
		if (x % i === 0) {
			return false;
		}
	}
	return true;
};

const main = (input) => {
	const p = input
		.split('')
		.map((x) => x.charCodeAt(0) - 'a'.charCodeAt(0))
		.map((x) => (x < 0 ? x + 59 : x + 1));
	const q = p.reduce((a, b) => a + b, 0);

	console.log(fn(q) ? 'It is a prime word.' : 'It is not a prime word.');
};
