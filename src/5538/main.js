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
		const input = buffer[0];
		main(input);
	});
})();

const main = (input) => {
	const t = {
		J: 0,
		O: 0,
		I: 0,
	};
	let x = 0;
	let y = new Set();
	const fn = () => {
		const p = t['J'];
		const q = t['O'];
		const r = t['I'];

		if (p < q) {
			return -1;
		}
		if (r < q) {
			return -1;
		}
		return q;
	};
	for (const p of input) {
		switch (p) {
			case 'J': {
				if (y.has('O') || y.has('I')) {
					t['J'] = 1;
					t['O'] = 0;
					t['I'] = 0;
					y.clear();
				} else {
					t[p] += 1;
				}
				y.add(p);
				break;
			}
			case 'O': {
				if (y.has('I')) {
					t['J'] = 0;
					t['O'] = 0;
					t['I'] = 0;
				} else {
					t[p] += 1;
				}
				y.add(p);
				break;
			}
			case 'I': {
				t[p] += 1;
				y.add(p);
				break;
			}
		}
		// console.log(t, fn());
		x = Math.max(x, fn());
	}
	console.log(x);
};
