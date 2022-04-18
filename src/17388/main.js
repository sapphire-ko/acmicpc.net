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

const main = (input) => {
	const p = input.reduce((a, b) => a + b, 0);

	if (p >= 100) {
		console.log('OK');
	} else {
		const q = [...Object.entries(input)].sort((a, b) => a[1] - b[1]);
		switch (q[0][0]) {
			case '0': {
				console.log('Soongsil');
				break;
			}
			case '1': {
				console.log('Korea');
				break;
			}
			case '2': {
				console.log('Hanyang');
				break;
			}
		}
	}
};
