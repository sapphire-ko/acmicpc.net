const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q] = input.split('\n').map(x => x.split(' ').map(x => parseInt(x, 10)));

	const x = q[0] - p[2];
	const y = q[1] / p[1];
	const z = q[2] - p[0];
	console.log(`${x} ${y} ${z}`);
};
main();
