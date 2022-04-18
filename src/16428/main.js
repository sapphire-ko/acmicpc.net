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
		const input = buffer[0].split(' ').map((x) => BigInt(x));
		main(input);
	});
})();

const main = ([a, b]) => {
	console.log(`${a / b}`);
	console.log(`${a % b}`);
};
