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

const fn = (a, b, c, d) => {
	return a / c + b / d;
};

const main = ([[a, b], [c, d]]) => {
	const p = [
		[0, fn(a, b, c, d)],
		[1, fn(c, a, d, b)],
		[2, fn(d, c, b, a)],
		[3, fn(b, d, a, c)],
	].sort((a, b) => b[1] - a[1] || a[0] - b[0]);
	console.log(p[0][0]);
};
