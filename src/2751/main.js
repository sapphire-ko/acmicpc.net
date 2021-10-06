const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	console.log(input.split('\n').slice(1).map(x => parseInt(x, 10)).sort((a, b) => a - b).join('\n'));
};
main();
