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
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = ([[N, M], ...input]) => {
	const t = [];
	const c = new Set();
	const fn = (x) => {
		return t.findIndex((t) => t.has(x));
	};
	for (const [p, q] of input) {
		const i = fn(p);
		const j = fn(q);

		c.add(p);
		c.add(q);

		if (i === -1 && j === -1) {
			t.push(new Set([p, q]));
		} else if (i === -1) {
			t[j].add(p);
		} else if (j === -1) {
			t[i].add(q);
		} else {
			if (i === j) {
				continue;
			}

			const a = i > j ? i : j;
			const b = i > j ? j : i;

			const [u] = t.splice(a, 1);
			t[b] = new Set([...t[b], ...u]);
		}
		// console.log(t);
	}
	const p = Array.from(c.keys()).length;
	const q = N - p;
	console.log(q + t.length);
};
