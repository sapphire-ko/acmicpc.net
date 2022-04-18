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
		const input = buffer[1].split(' ').map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = (input) => {
	const p = Object.entries(input).map((x) => [parseInt(x[0], 10), x[1]]);
	const q = p.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
	const r = q.map((x, i) => [x[0], i]);
	const s = r.sort((a, b) => a[0] - b[0]);
	const t = s.map((x) => x[1]);
	console.log(t.join(' '));
};
