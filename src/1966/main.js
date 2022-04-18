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
		const input = buffer.map((x) => x.split(' ').map((x) => parseInt(x, 10)));
		main(input);
	});
})();

const main = (input) => {
	while (input.length > 0) {
		const p = input.shift()[1];
		const q = input.shift();
		const r = [...q].sort((a, b) => b - a);
		const s = [...q].map((x, i) => [x, i]);
		// console.log(p);
		// console.log(q);
		// console.log(r);
		// console.log(s);
		let i = 1;
		while (true) {
			// console.log(p, s, r);
			while (s[0][0] !== r[0]) {
				const x = s.shift();
				s.push(x);
			}
			if (s[0][1] === p) {
				console.log(i);
				break;
			}
			s.shift();
			r.shift();
			i += 1;
		}
	}
};
