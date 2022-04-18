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

const main = ([x, y, z]) => {
	console.log(x + y <= z ? 1 : 0);
};
