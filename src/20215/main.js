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

const main = ([w, h]) => {
	const p = w + h;
	const q = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
	console.log(p - q);
};
