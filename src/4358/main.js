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
		const input = buffer;
		main(input);
	});
})();

const main = (input) => {
	const t = new Map();
	let l = 0;
	for (const k of input) {
		if (!k.trim()) {
			continue;
		}
		l += 1;
		if (t.has(k)) {
			t.set(k, t.get(k) + 1);
		} else {
			t.set(k, 1);
		}
	}
	const keys = [...t.entries()].sort();
	console.log(keys.map(([key, value]) => `${key} ${((value / l) * 100).toFixed(4)}`).join('\n'));
};
