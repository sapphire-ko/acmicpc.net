const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('\n')[1];

	const fn1 = x => {
		return x.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
	};
	const t = {};
	const fn2 = x => {
		if (x === 0) {
			return 1;
		}
		if (!t[x]) {
			t[x] = 31 * fn2(x - 1) % 1234567891;
		}
		return t[x];
	}

	const q = p.split('').map((x, i) => {
		const a = fn1(x);
		const b = fn2(i);
		return (a * b) % 1234567891;
	}).reduce((a, b) => a + b, 0) % 1234567891;
	console.log(q);
};
main();
