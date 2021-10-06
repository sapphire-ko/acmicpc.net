const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = parseInt(input, 10);

	const fn = () => {
		const q = Math.ceil(Math.log2(p));
		const r = Math.pow(2, q);
		if (p === r) {
			return p;
		}
		return r - ((r - p) * 2);
	};
	console.log(fn());
};
main();
