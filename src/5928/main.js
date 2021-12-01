const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split(' ').map(x => parseInt(x, 10));

	const q = p[0] - 11;
	const r = p[1] - 11;
	const s = p[2] - 11;

	const u = q * 24 * 60 + r * 60 + s;
	console.log(u < 0 ? -1 : u);
};
main();
