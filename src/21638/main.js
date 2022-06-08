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
		const input = buffer.map((x) => x.split(' ').map(Number));
		main(input);
	});
})();

const main = ([[t1, v1], [t2, v2]]) => {
	const fn = () => {
		if (t2 < 0 && v2 >= 10) {
			return 'A storm warning for tomorrow! Be careful and stay home if possible!';
		}
		if (t2 < t1) {
			return 'MCHS warns! Low temperature is expected tomorrow.';
		}
		if (v1 < v2) {
			return 'MCHS warns! Strong wind is expected tomorrow.';
		}
		return 'No message';
	};
	console.log(fn());
};
