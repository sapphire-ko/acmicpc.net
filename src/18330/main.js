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

const main = ([n, k]) => {
	const p = k + 60;
	const q = p - n;
	if (q < 0) {
		const r = p * 1500;
		const s = -q * 3000;
		console.log(r + s);
	} else {
		console.log(n * 1500);
	}
};
