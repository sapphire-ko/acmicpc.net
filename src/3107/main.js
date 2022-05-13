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
		const input = buffer[0];
		main(input);
	});
})();

const main = (input) => {
	const p = input
		.split(':')
		.map((x) => (x === '' ? x : x.padStart(4, '0')))
		.join(':');
	if (!p.includes('::')) {
		console.log(p);
		return;
	}
	const q = p.split('::');

	const r = q.flatMap((x) => x.split(':')).join('').length / 4;
	const s = 8 - r;

	const x = [...new Array(s)].fill('0000');
	const y = [q[0], ...x, q[1]].filter((x) => x !== '');

	console.log(y.join(':'));
};
