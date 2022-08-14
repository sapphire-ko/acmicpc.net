(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
	});
	const buffer = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		buffer.pop();
		const input = buffer.map((x) => x.split(' ').map((x, i) => (i === 0 ? x : Number(x))));
		main(input);
	});
})();

const main = (input) => {
	for (const [name, age, weight] of input) {
		const p = age > 17 || weight >= 80;
		console.log(`${name} ${p ? 'Senior' : 'Junior'}`);
	}
};
