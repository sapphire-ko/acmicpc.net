const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('-');
	const fn = () => {
		if (p.length === 1) {
			return p[0].split('+').map(x => parseInt(x, 10)).reduce((a, b) => a + b, 0);
		}
		const q = p[0].split('+').map(x => parseInt(x, 10)).reduce((a, b) => a + b, 0);
		const r = p.slice(1).join('+').split('+').map(x => parseInt(x, 10)).reduce((a, b) => a + Math.abs(b), 0);
		return q - r;
	}
	console.log(fn());
};
main();
