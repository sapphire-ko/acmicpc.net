const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`;

const main = () => {
	const [p, q] = input.split(' ').map(x => BigInt(x));
	const y = p % q;
	const x = (p - y) / q;
	console.log(`${x}`);
	console.log(`${y}`);
};
main();
