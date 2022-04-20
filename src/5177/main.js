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
		buffer.shift();
		const input = buffer;
		main(input);
	});
})();

const fn = (x) => {
	return x
		.trim()
		.toLowerCase()
		.replace(/  +/g, ' ')
		.replace(/;/g, ',')
		.replace(/[\[\{]/g, '(')
		.replace(/[\]\}]/g, ')')
		.replace(/ ?([\(\).,:]) ?/g, '$1');
};

const main = (input) => {
	let i = 0;
	while (input.length > 0) {
		i += 1;
		const [p, q] = input.splice(0, 2);
		const r = fn(p);
		const s = fn(q);
		console.log(`Data Set ${i}: ${r === s ? 'equal' : 'not equal'}\n`);
	}
};
