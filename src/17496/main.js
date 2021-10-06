const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q, r, s] = input.split(' ').map(x => parseInt(x, 10));

	const x = Math.floor((p - 1) / q);
	console.log(x * r * s);
};
main();
