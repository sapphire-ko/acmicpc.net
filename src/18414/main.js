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
		const input = buffer[0].split(' ').map((x) => parseInt(x, 10));
		main(input);
	});
})();

const main = ([x, l, r]) => {
	if(x >= l && x <= r) {
		console.log(x);
	}
	else if(x < l) {
		console.log(l);
	}
	else {
		console.log(r);
	}
};
