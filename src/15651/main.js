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
		const input = buffer[0].split(' ').map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = ([n, m]) => {
	let p = [];
	const fn = (t, x) => {
		if (x > n + 1) {
			return;
		}
		if (t.length === m) {
			p.push(t.join(' '));
			return;
		}
		for (let i = 1; i <= n; ++i) {
			t.push(i);
			fn(t, i);
			t.pop();
		}
	};
	fn([], 1);
	console.log(p.join('\n'));
};
