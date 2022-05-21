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
		const input = buffer.map(Number);
		main(input);
	});
})();

const main = ([n, ...input]) => {
	const p = [];
	const q = [];
	let m = 1;

	while (input.length > 0) {
		// console.log('p', p, q);
		const x = input.shift();

		for (let i = m; i <= x; ++i) {
			if (i <= x) {
				p.push(m);
				q.push('+');
				m += 1;
			}
		}
		const y = p.pop();
		if (y !== x) {
			return console.log('NO');
		}
		q.push('-');
	}
	console.log(q.join('\n'));
};
