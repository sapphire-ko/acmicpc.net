const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('\n').slice(1).map(x => x.split(' '));

	const q = [0, 0, 0];
	const fn2 = (x, y, n) => {
		for (let i = x; i < x + n; ++i) {
			for (let j = y; j < y + n; ++j) {
				if (p[x][y] !== p[i][j]) {
					return false;
				}
			}
		}
		return true;
	};
	const fn1 = (x, y, n) => {
		if (fn2(x, y, n)) {
			switch (p[x][y]) {
				case '-1': {
					q[0] += 1;
					break;
				}
				case '0': {
					q[1] += 1;
					break;
				}
				case '1': {
					q[2] += 1;
					break;
				}
			}
		}
		else {
			const o = n / 3;
			fn1(x, y, o);
			fn1(x, y + o, o);
			fn1(x, y + o + o, o);
			fn1(x + o, y, o);
			fn1(x + o, y + o, o);
			fn1(x + o, y + o + o, o);
			fn1(x + o + o, y, o);
			fn1(x + o + o, y + o, o);
			fn1(x + o + o, y + o + o, o);
		}
	};
	fn1(0, 0, p.length);
	console.log(q.join('\n'));
};
main();
