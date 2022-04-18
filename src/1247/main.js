(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	let n = -1;
	let i = 0;
	let s = 0n;
	rl.on('line', (line) => {
		if (n === -1) {
			n = parseInt(line, 10);
			i = 0;
			s = 0n;
			return;
		}
		s += BigInt(line);
		i += 1;
		if (i === n) {
			n = -1;
			if (s === 0n) {
				console.log(0);
			} else if (s > 0n) {
				console.log('+');
			} else {
				console.log('-');
			}
		}
	});
})();
