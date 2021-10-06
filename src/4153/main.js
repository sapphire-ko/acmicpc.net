const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('\n').slice(0, -1).map(x => x.split(' ').map(x => parseInt(x, 10)).sort((a, b) => a - b));
	for (const q of p) {
		console.log(q[0] * q[0] + q[1] * q[1] === q[2] * q[2] ? 'right' : 'wrong');
	}
};
main();
