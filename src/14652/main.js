const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q, r] = input.split(' ').map(x => parseInt(x, 10));

	const x = Math.floor(r / q);
	const y = r % q;

	console.log(`${x} ${y}`);
};
main();
