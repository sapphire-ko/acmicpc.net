const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q, r, s, t] = input.split('\n').map(x => parseInt(x, 10));

	const x = Math.ceil(q / s);
	const y = Math.ceil(r / t);

	console.log(p - Math.max(x, y));
};
main();
