const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q] = input.split(' ').map(x => parseInt(x, 10));

	const x = [...new Array(q - p + 1)].map((_, i) => i + p);

	const k = Math.ceil(Math.sqrt(q));

	const y = [...new Array(k - 1)].map((x, i) => i + 2);

	const z = x.filter(p => {
		if (p === 1) {
			return false;
		}
		return y.every(q => {
			if (p % q === 0) {
				return p === q;
			}
			return true;
		});
	});
	console.log(z.join('\n'));
};
main();
