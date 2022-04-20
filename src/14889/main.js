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
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = (input) => {
	const p = [...new Array(input.length)].map((x, i) => i);
	const fn = (t, x) => {
		if (t.length === input.length / 2) {
			const fn2 = (s) => {
				if (s.length === 0) {
					return 0;
				}
				const a = s.pop();
				let c = 0;
				for (const b of s) {
					c += input[a][b] + input[b][a];
				}
				return c + fn2(s);
			};
			const x = fn2([...t]);
			const y = fn2(p.filter((x) => !t.includes(x)));
			return Math.abs(x - y);
		}
		let c = Infinity;
		for (let i = x; i < input.length; ++i) {
			t.push(i);
			c = Math.min(c, fn(t, i + 1));
			t.pop();
		}
		return c;
	};
	console.log(fn([], 0));
};
