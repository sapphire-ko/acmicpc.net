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
	const fn = (p) => {
		if (p === 0) {
			return 1;
		}
		if (p === 1) {
			return 1;
		}
		if (p === 2) {
			return 2;
		}
		if (p === 3) {
			return 6;
		}
		if (p === 4) {
			return 4;
		}
		return 0;
	};
	console.log(fn(input));
};
