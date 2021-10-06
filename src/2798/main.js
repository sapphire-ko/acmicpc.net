const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q] = input.split('\n').map(x => x.split(' ').map(x => parseInt(x, 10)));

	const x = p[1];

	let z = 0;
	for (let i = 0; i < q.length - 2; ++i) {
		for (let j = i + 1; j < q.length - 1; ++j) {
			for (let k = j + 1; k < q.length; ++k) {
				const y = q[i] + q[j] + q[k];
				if (x < y) {
					continue;
				}
				if (z < y) {
					z = y;
				}
			}
		}
	}
	console.log(z);
};
main();
