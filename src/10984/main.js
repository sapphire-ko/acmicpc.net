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
		buffer.shift();
		const input = buffer;
		main(input);
	});
})();

const main = (input) => {
	while (input.length > 0) {
		const n = parseInt(input.shift());
		let x = 0;
		let y = 0;
		const p = input.splice(0, n);
		for (const q of p) {
			const [r, s] = q.split(' ');
			const t = parseInt(r, 10);
			const u = parseFloat(s);
			x += t;
			y += t * u;
		}
		console.log(x + ' ' + (y / x).toFixed(1));
	}
};
