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

const main = ([n, m]) => {
	if (m === 1 || m === 2) {
		console.log('NEWBIE!');
	} else if (m <= n) {
		console.log('OLDBIE!');
	} else {
		console.log('TLE!');
	}
};
