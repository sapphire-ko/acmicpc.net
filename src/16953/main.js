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
	let i = 0;
	let p = b;
	while (true) {
		if (p === a) {
			console.log(i + 1);
			return;
		}
		if (p < a) {
			console.log(-1);
			return;
		}
		if (p % 2 === 0) {
			p = p / 2;
			i += 1;
			continue;
		}
		if (p % 10 === 1) {
			p = (p - 1) / 10;
			i += 1;
			continue;
		}
		console.log(-1);
		return;
	}
};
