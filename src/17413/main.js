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
	let p = [];
	for (const q of input) {
		if (q === '<') {
			p.push([true, []]);
			continue;
		}
		if (q === '>') {
			p.push([false, []]);
			continue;
		}
		if (p.length === 0) {
			p.push([false, []]);
		}
		if (q === ' ' && !p[p.length - 1][0]) {
			p.push([false, [' ']]);
			p.push([false, []]);
			continue;
		}
		p[p.length - 1][1].push(q);
	}

	const q = p.map((x) => (x[0] ? `<${x[1].join('')}>` : x[1].reverse().join(''))).join('');
	console.log(q);
};
