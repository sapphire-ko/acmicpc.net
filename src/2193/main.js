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
		const input = Number(buffer[0]);
		main(input);
	});
})();

const main = (input) => {
	const t = {
		1: [BigInt(0), BigInt(1)],
	};
	const fn = (x) => {
		if (t[x]) {
			return t[x];
		}
		const p = fn(x - 1);
		t[x] = [p[0] + p[1], p[0]];
		return t[x];
	};
	const q = fn(input);
	console.log(`${q[0] + q[1]}`);
};
