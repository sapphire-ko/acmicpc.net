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

const fn = (x) => {
	let i = 0;
	while (x > 10) {
		const p = x % 10;
		i += p;
		x = Math.floor((x - p) / 10);
	}
	return i + x;
};

const main = (input) => {
	for (let i = 0; i <= input; ++i) {
		const x = fn(i) + i;
		if (x === input) {
			console.log(i);
			return;
		}
	}
	console.log(0);
};
