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
	const fn = (t, x) => {
		if (x > n + 1) {
			return;
		}
		if (t.length === m) {
			console.log(t.join(' '));
			return;
		}
		for (let i = x; i <= n; ++i) {
			t.push(i);
			fn(t, i);
			t.pop();
		}
	};
	fn([], 1);
};
