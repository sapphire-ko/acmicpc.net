const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q] = input.split('\n').slice(1).map(x => BigInt(x));
	console.log(`${p * q}`);
};
main();
