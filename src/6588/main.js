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
		buffer.pop();
		const input = buffer;
		main(input);
	});
})();

const a = [
	'3',
	'5',
	'7',
	'11',
	'13',
	'17',
	'19',
	'23',
	'29',
	'31',
	'37',
	'41',
	'43',
	'47',
	'53',
	'59',
	'61',
	'67',
	'71',
	'73',
	'79',
	'83',
	'89',
	'97',
];
const b = {};

const fn = (x) => {
	for (let i = 3; i < x; i += 2) {
		const p = a.every((x) => i % x !== 0);
		if (p) {
			a.push(i);
		}
	}
	for (let x of a) {
		b[x] = true;
	}
};

const main = (input) => {
	let p = -1;
	for (const x of input) {
		p = Math.max(p, x);
	}
	fn(p);
	// console.log(a, b);
	const k = [];
	for (const x of input) {
		for (let i = 0; i < a.length; ++i) {
			const p = a[i];
			const q = x - p;
			if (b[q]) {
				k.push(`${x} = ${p} + ${q}`);
				break;
			}
		}
	}
	console.log(k.join('\n'));
};
