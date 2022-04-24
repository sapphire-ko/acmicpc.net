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
		const input = buffer.map((x) => x.replace('noon', '12:00 p.m.').replace('midnight', '12:00 a.m.').split(' '));
		main(input);
	});
})();

const t = {
	UTC: 0,
	GMT: 0,
	BST: 1,
	IST: 1,
	WET: 0,
	WEST: 1,
	CET: 1,
	CEST: 2,
	EET: 2,
	EEST: 3,
	MSK: 3,
	MSD: 4,
	AST: -4,
	ADT: -3,
	NST: -3.5,
	NDT: -2.5,
	EST: -5,
	EDT: -4,
	CST: -6,
	CDT: -5,
	MST: -7,
	MDT: -6,
	PST: -8,
	PDT: -7,
	HST: -10,
	AKST: -9,
	AKDT: -8,
	AEST: 10,
	AEDT: 11,
	ACST: 9.5,
	ACDT: 10.5,
	AWST: 8,
};

const fn1 = (x, y) => {
	const [p, q] = x.split(':').map(Number);
	if (p === 12) {
		return y === 'a.m.' ? q : 12 * 60 + q;
	}
	const r = y === 'a.m.' ? 0 : 12 * 60;
	return p * 60 + q + r;
};

const fn2 = (x) => {
	const p = x % 60;
	const q = ((x - p) / 60) % 24;
	const r = q % 12;
	const s = q === r ? 'a.m.' : 'p.m.';

	if (p === 0 && r === 0) {
		if (s === 'a.m.') {
			return 'midnight';
		} else {
			return 'noon';
		}
	}

	const a = `${p}`.padStart(2, '0');
	const b = r === 0 ? 12 : r;

	return `${b}:${a} ${s}`;
};

const main = (input) => {
	for (const [a, b, c, d] of input) {
		const p = fn1(a, b);
		const q = t[c] * 60;
		const r = t[d] * 60;
		const s = (p - q + r + 24 * 60) % (24 * 60);
		console.log(fn2(s));
	}
};
