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
		const input = buffer.map((x) => parseInt(x, 10));
		main(input);
	});
})();

const fn = (x) => {
	if(x === 1) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(x); ++i) {
		if (x % i === 0) {
			return false;
		}
	}
	return true;
};

const main = ([a, b]) => {
	let p = -1;
	let q = 0;
	for (let i = a; i <= b; ++i) {
		if (!fn(i)) {
			continue;
		}
		if (p === -1) {
			p = i;
		}
		q += i;
	}
	if (p !== -1) {
		console.log(q);
	}
	console.log(p);
};
