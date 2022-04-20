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
		const input = buffer.map((x) => x.split(' ').map((x) => parseInt(x, 10)));
		main(input);
	});
})();

const main = ([[n], input]) => {
	const fn = (t, x) => {
		if (t.length === n) {
			let s = 0;
			for (let i = 1; i < t.length; ++i) {
				s += Math.abs(input[t[i - 1]] - input[t[i]]);
			}
			return s;
		}
		let s = -1;
		for (let i = 0; i < n; ++i) {
			if (t.indexOf(i) !== -1) {
				continue;
			}
			t.push(i);
			s = Math.max(s, fn(t, x + 1));
			t.pop();
		}
		return s;
	};
	console.log(fn([], 0));
};
