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
		const input = buffer.map(Number);
		input.shift();
		main(input);
	});
})();

const main = (input) => {
	const t = Array.from(new Array(input.length));
	for (let i = 0; i < input.length; ++i) {
		t[i] = [input[i], 0, 0];
	}

	for (let i = 0; i < input.length; ++i) {
		const p = t[i][0];
		t[i][1] = p + Math.max(t[i - 2]?.[1] ?? 0, t[i - 2]?.[2] ?? 0);
		t[i][2] = p + (t[i - 1]?.[1] ?? 0);
	}

	const q = t[input.length - 1];
	console.log(Math.max(q[1], q[2]));
};
