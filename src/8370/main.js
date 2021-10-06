const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`;

const main = () => {
	const [p, q, r, s] = input.split(' ').map(x => parseInt(x, 10));
	console.log(p * q + r * s);
};
main();
