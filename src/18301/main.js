const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q, r] = input.split(' ').map(x => parseInt(x, 10));
	const s = Math.floor((p + 1) * (q + 1) / (r + 1) - 1);
	console.log(s);
};
main();
