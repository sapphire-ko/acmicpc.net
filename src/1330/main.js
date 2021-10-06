const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q] = input.split(' ').map(x => parseInt(x, 10));
	if (p === q) {
		console.log('==');
	}
	else if (p < q) {
		console.log('<');
	}
	else {
		console.log('>');
	}
};
main();
