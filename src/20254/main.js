const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q, r, s] = input.split(' ').map(x => parseInt(x, 10));
	console.log(56 * p + 24 * q + 14 * r + 6 * s);
};
main();
