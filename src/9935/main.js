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

const main = ([a, b]) => {
	let p = [];
	for (let i = 0; i < a.length; ++i) {
		p.push(a[i]);
		const q = p.slice(p.length - b.length).join('');
		if (q === b) {
			p.splice(p.length - b.length, b.length);
		}
	}
	if (p.length === 0) {
		console.log('FRULA');
	} else {
		console.log(p.join(''));
	}
};
