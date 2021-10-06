const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`;

const main = () => {
	const [p, q] = input.split('\n').map(x => BigInt(x));

	// p = 2a + q;
	// 2a = p - q;
	// a = (p - q) / 2
	// b = a + q;

	const a = (p - q) / 2n;
	const b = a + q;

	console.log(`${b}`);
	console.log(`${a}`);
};
main();
