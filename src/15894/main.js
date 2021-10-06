const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const n = parseInt(input, 10);
	console.log(4 * n);
};
main();
