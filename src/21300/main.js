const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	console.log(input.split(' ').map(x => parseInt(x, 10) * 5).reduce((a, b) => a + b, 0));
};
main();
