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

const main = ([_1, p, _2, q]) => {
	const t = {};
	for (const x of q) {
		t[x] = 0;
	}
	for (const x of p) {
		if (t[x] !== 0) {
			continue;
		}
		t[x] = 1;
	}
	console.log(q.map((x) => t[x]).join(' '));
};
