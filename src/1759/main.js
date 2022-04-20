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
		const input = buffer.map((x, i) => x.split(' ').map((x) => (i === 0 ? parseInt(x, 10) : x)));
		main(input);
	});
})();

const main = ([[l, c], input]) => {
	const p = input.sort((a, b) => a.localeCompare(b));
	const q = [];
	const fn = (t, k) => {
		if (t.length === l) {
			const a = t.filter((x) => 'aeiou'.indexOf(p[x]) !== -1).length;
			const b = t.length - a;
			if (a >= 1 && b >= 2) {
				const r = t.map((x) => p[x]).join('');
				q.push(r);
			}
			return;
		}
		for (let i = k; i < c; ++i) {
			t.push(i);
			fn(t, i + 1);
			t.pop(i);
		}
	};
	fn([], 0);
	console.log(q.join('\n'));
};
