const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = parseInt(input, 10);
	console.log(Math.ceil(p / 5));
};
main();
