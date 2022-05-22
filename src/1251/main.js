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
	let p = '';

	const fn2 = (x) => {
		return x.split('').reverse().join('');
	};

	const fn1 = (i, j) => {
		const a = input.slice(0, i);
		const b = input.slice(i, j);
		const c = input.slice(j);

		const q = `${fn2(a)}${fn2(b)}${fn2(c)}`;
		if(p === '') {
			p = q;
			return;
		}
		if (q.localeCompare(p) === -1) {
			p = q;
			return;
		}
	};

	for (let i = 1; i < input.length - 1; ++i) {
		for (let j = i + 1; j < input.length; ++j) {
			fn1(i, j);
		}
	}
	console.log(p);
};
