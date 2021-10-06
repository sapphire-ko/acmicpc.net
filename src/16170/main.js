const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const date = new Date();
	console.log(date.getUTCFullYear());
	console.log(`${date.getUTCMonth() + 1}`.padStart(2, '0'));
	console.log(`${date.getUTCDate()}`.padStart(2, '0'));
};
main();
