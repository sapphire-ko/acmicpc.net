const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('\n').slice(1).map(x => parseInt(x, 10)).sort((a, b) => a - b);

	const fn1 = () => {
		let sum = 0;
		for (const q of p) {
			sum += q;
		}
		return Math.round(sum / p.length);
	};
	const fn2 = () => {
		return p[Math.floor(p.length / 2)];
	}
	const fn3 = () => {
		const t = {};
		for (const q of p) {
			if (!t[q]) {
				t[q] = 1;
			}
			else {
				t[q] += 1;
			}
		}
		const x = Object.entries(t);
		const y = Math.max(...x.map(x => x[1]));
		const z = x.filter(x => x[1] === y).map(x => parseInt(x[0], 10)).sort((a, b) => a - b);
		return z.length === 1 ? z[0] : z[1];
	}
	const fn4 = () => {
		return p[p.length - 1] - p[0];
	}

	console.log([fn1(), fn2(), fn3(), fn4()].join('\n'));
};
main();
