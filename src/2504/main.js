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

const fn = (x) => {
	const t = [];
	let p = 0;
	let b = 0;
	for (const y of x) {
		if (y === '(') {
			t.push(2);
			++p;
			continue;
		}
		if (y === ')') {
			if (t.pop() !== 2) {
				return false;
			}
			--p;
			continue;
		}
		if (y === '[') {
			t.push(1);
			++b;
			continue;
		}
		if (y === ']') {
			if (t.pop() != 1) {
				return false;
			}
			--b;
			continue;
		}
	}
	return p == 0 && b == 0;
};

const main = (input) => {
	if (!fn(input)) {
		console.log(0);
		return;
	}
};
