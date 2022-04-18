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
		const input = buffer.map((x) => BigInt(x));
		main(input);
	});
})();

const main = ([t, ...x]) => {
	for (let i = 0n; i < t; ++i) {
		x.shift();
		const n = x.shift();
		const n1 = Number(n);
		const p = x.splice(0, n1);
		const q = p.reduce((a, b) => {
			const x = Number(b % n);
			return (a + x) % n1;
		}, 0);
		console.log(q % n1 === 0 ? 'YES' : 'NO');
	}
};
