const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = parseInt(input, 10);
	console.log(`${p * 0.78} ${p * 0.8 + p * 0.2 * 0.78}`);
};
main();
