const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('\n').map(x => parseInt(x, 10));

	const fn = () => {
		if (p[0] < p[1] && p[1] < p[2] && p[2] < p[3]) {
			return 'Fish Rising';
		}
		if (p[0] > p[1] && p[1] > p[2] && p[2] > p[3]) {
			return 'Fish Diving';
		}
		if (p[0] === p[1] && p[1] === p[2] && p[2] === p[3]) {
			return 'Fish At Constant Depth';
		}
		return 'No Fish';
	};
	console.log(fn());
};
main();
