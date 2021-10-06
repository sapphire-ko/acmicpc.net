const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`;

const main = () => {
	const [p, q] = input.split('\n').map(x => BigInt(x));
	console.log(`${p + q}`);
	console.log(`${p - q}`);
	console.log(`${p * q}`);
};
main();
