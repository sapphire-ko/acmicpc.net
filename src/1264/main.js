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
		const input = buffer;
		main(input);
	});
})();

const main = (input) => {
	for (const p of input) {
		if (p === '#') {
			break;
		}
		const q = p.toLowerCase().split('');
		const r = q.filter((x) => ['a', 'e', 'i', 'o', 'u'].includes(x));
		console.log(r.length);
	}
};
