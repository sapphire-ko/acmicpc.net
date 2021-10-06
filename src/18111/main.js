const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('\n').map(x => x.split(' ').map(x => parseInt(x, 10)));

	const q = p[0][2];
	const r = p.slice(1).flat();

	const max = r.reduce((a, b) => a + b, 0) + q;

	const level = Math.floor((max - q) / r.length);

	console.log('level', level, max);

	let t = {};
	const fn = (level) => {
		console.log('level', level);
		if (!t[level]) {
			const x = r.map(x => level - x);
			const y = x.reduce((a, b) => a + b, 0);
			if (q < y) {
				t[level] = Infinity;
			}
			else {
				t[level] = x.map(x => x > 0 ? x : -x * 2).reduce((a, b) => a + b, 0);
			}
		}
		return t[level];
	};

	let m = fn(level);
	let n = level;

	for (let i = level - 1; i > 0; --i) {
		let curr = fn(i);
		let next = fn(i - 1);

		if (curr < m) {
			m = curr;
			n = i;
		}

		if (next > curr) {
			break;
		}
	}

	for (let i = level + 1; i < 256; ++i) {
		let curr = fn(i);
		let next = fn(i + 1);

		if (curr < m) {
			m = curr;
			n = i;
		}

		if (next > curr) {
			break;
		}
	}

	console.log(`${m} ${n}`);
};
main();
