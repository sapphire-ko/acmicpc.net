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
		buffer.shift();
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = (input) => {
	const p = input.map(([a, b, c]) => {
		if (a > b && b > c) {
			return true;
		}
		if (a < b && b < c) {
			return true;
		}
		return false;
	});
	const q = p.map((x) => (x ? 'Ordered' : 'Unordered'));
	console.log(`Gnomes:\n${q.join('\n')}`);
};
