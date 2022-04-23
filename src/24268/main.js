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
		const input = buffer[0].split(' ').map(Number);
		main(input);
	});
})();

const main = ([n, d]) => {
	// const p = n.toString(d);
	let x = -1;
	const fn = (t) => {
		if (x !== -1) {
			return;
		}
		if (t.length === d) {
			const q = parseInt(t.join(''), d);
			if (n < q) {
				x = q;
			}
			return;
		}
		for (let i = t.length === 0 ? 1 : 0; i < d; ++i) {
			if (t.includes(i)) {
				continue;
			}
			t.push(i);
			fn(t);
			t.pop();
		}
	};
	fn([]);
	console.log(x || -1);
};
