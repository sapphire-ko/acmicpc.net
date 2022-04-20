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
		const input = parseInt(buffer[0], 10);
		main(input);
	});
})();

const main = (input) => {
	const n = input;
	var c = 1;
	while ((c * (c + 1)) / 2 < n) {
		++c;
	}
	--c;
	var x = [];
	for (var i = 1; i < c + 2; ++i) {
		x.push(i + '/' + (c + 2 - i));
	}
	if (c % 2 === 0) {
		x = x.reverse();
	}
	console.log(x[n - (c * (c + 1)) / 2 - 1]);
};
