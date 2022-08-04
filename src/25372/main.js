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
		const input = buffer;
		main(input);
	});
})();

const main = (input) => {
	const p = input.map((x) => x.length >= 6 && x.length <= 9);
	const q = p.map((x) => (x ? 'yes' : 'no'));
	console.log(q.join('\n'));
};
