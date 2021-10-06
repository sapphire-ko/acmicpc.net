const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q] = input.split(' ').map(x => BigInt(x));
	console.log(`${p + q}`);
};
main();
