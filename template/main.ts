import readline from 'readline';

(() => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	const buffer: string[] = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		const input = buffer;
		main(input);
	});
})();

const main = (input: string[]) => {};
