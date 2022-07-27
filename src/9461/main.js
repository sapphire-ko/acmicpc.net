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
		const input = buffer.map(Number);
		main(input);
	});
})();

const main = (input) => {
	input.shift();
	const t = {
		1: 1,
		2: 1,
		3: 1,
		4: 2,
		5: 2,
		6: 3,
		7: 4,
		8: 5,
		9: 7,
		10: 9,
	};
	const fn = (x) => {
		if (!t[x]) {
			t[x] = fn(x - 1) + fn(x - 5);
		}
		return t[x];
	};
	for (const p of input) {
		console.log(fn(p));
	}
};
