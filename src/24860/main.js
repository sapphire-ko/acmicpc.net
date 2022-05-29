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
		const input = buffer.map((x) => x.split(' ').map(BigInt));
		main(input);
	});
})();

const main = ([[Vκ, Jκ], [Vλ, Jλ], [Vh, Dh, Jh]]) => {
	const p = Vκ * Jκ;
	const q = Vλ * Jλ;
	const r = Vh * Dh * Jh;
	console.log(`${p * r + q * r}`);
};
