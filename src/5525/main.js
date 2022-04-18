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
		const input = [parseInt(buffer[0], 10), buffer[2]];
		main(input);
	});
})();

const main = ([n, s]) => {
	const p = s.match(/I(OI)+/g);
	const q = p.map((x) => (x.length - 1) / 2);
	const r = q.map((x) => Math.max(0, x - n + 1));
	console.log(r.reduce((a, b) => a + b, 0));
};
