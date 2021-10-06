const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`;

const main = () => {
	const [p, q] = input.split('\n').map(x => parseInt(x, 10));

	const diff = q - p;

	console.log(q + diff);
};
main();
