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
		const input = BigInt(buffer[0]);
		main(input);
	});
})();

const main = (input) => {
	const p = [];
	for(let i = 0n; i < input; ++i) {
		p.push('SciComLove');
	}
	console.log(p.join('\n'));
};
