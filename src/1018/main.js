const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('\n').slice(1).map((x, i) => x.split('').map((y, j) => {
		const x = (i + j) % 2 ? 'W' : 'B';
		return x === y ? 0 : 1;
	}));

	const y = p.length;
	const x = p[0].length;

	const fn = (i, j) => {
		let x = 0;
		for (let r = 0; r < 8; ++r) {
			for (let s = 0; s < 8; ++s) {
				x += p[i + s][j + r];
			}
		}
		return Math.min(x, 64 - x);
	};

	let z = Infinity;
	for (let i = 0; i <= y - 8; ++i) {
		for (let j = 0; j <= x - 8; ++j) {
			z = Math.min(z, fn(i, j));
		}
	}
	console.log(z);
};
main();
