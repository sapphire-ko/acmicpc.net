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
		buffer.pop();
		const input = buffer.map(Number);
		main(input);
	});
})();

const main = (input) => {
	const LENGTH = 1_000_000;
	const p = Array.from(new Array(LENGTH)).fill(true);
	p[0] = false;
	p[1] = false;

	const q = {};
	for (let i = 2; i < LENGTH; ++i) {
		if (p[i]) {
			q[i] = i;
		}
		for (let j = 1; i * j < LENGTH; ++j) {
			p[i * j] = false;
		}
	}
	const r = Object.values(q);

	const k = [];

	for (const x of input) {
		for (const s of r) {
			const t = x - s;
			if (q[t]) {
				k.push([s, t]);
				break;
			}
		}
	}
	console.log(k.map(([p, q]) => `${p + q} = ${p} + ${q}`).join('\n'));
};
