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
		const input = Number(buffer[0]);
		main(input);
	});
})();

const main = (input) => {
	const t = {
		1: 1,
		2: 2,
	};
	const fn = (x) => {
		if (!t[x]) {
			t[x] = (fn(x - 1) + fn(x - 2)) % 10_007;
		}
		return t[x];
	};
	console.log(fn(input));
};
