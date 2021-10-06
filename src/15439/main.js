const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = parseInt(input, 10);
	const q = p;
	console.log(p * (q - 1));
};
main();
