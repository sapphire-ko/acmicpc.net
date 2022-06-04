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
		const input = buffer[0].split(' ').map(Number);
		main(input);
	});
})();

const main = ([w_c, h_c, w_s, h_s]) => {
	const p = w_s + 2 <= w_c;
	const q = h_s + 2 <= h_c;
	console.log(p && q ? 1 : 0);
};
