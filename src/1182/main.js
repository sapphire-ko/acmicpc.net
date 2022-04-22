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
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = ([[n, s], input]) => {
	let p = 0;
	const fn = (t, x) => {
		// console.log(t);
		const q = t.reduce((a, b) => a + input[b], 0);
		if (t.length > 0 && q === s) {
			p += 1;
		}
		if (t.length === n) {
			return;
		}
		for (let i = x; i < n; ++i) {
			t.push(i);
			fn(t, i + 1);
			t.pop();
		}
	};
	fn([], 0);
	console.log(p);
};
