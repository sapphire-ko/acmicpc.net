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

const main = ([[p1, s1], [s2, p2]]) => {
	const p = p1 + p2;
	const s = s1 + s2;

	if (p === s) {
		if (p1 === s2) {
			console.log('Penalty');
		} else if (s2 > p1) {
			console.log('Persepolis');
		} else {
			console.log('Esteghlal');
		}
	} else if (p > s) {
		console.log('Persepolis');
	} else {
		console.log('Esteghlal');
	}
};
