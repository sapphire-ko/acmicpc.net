(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
	});
	const buffer = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		const input = buffer[1].split(' ').map(Number);
		main(input);
	});
})();

const main = (input) => {
	const p = input.map((x, i) => [x, i]);
	p.sort((a, b) => a[0] - b[0]);

	let c = 0;
	let i = 0;
	const q = [];
	for (let j = 0; j < p.length; ++j) {
		if (p[i][0] !== p[j][0]) {
			c += 1;
			i = j;
		}
		q.push([p[j], c]);
	}

	const r = q.sort((a, b) => a[0][1] - b[0][1]);
	const s = r.map(x => x[1]);
	console.log(s.join(' '));
};
