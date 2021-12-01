const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = BigInt(input);
	const fn = () => {
		if (p < 3n) {
			return 0;
		}
		if (p === 4n) {
			return 1;
		}
		return `${(((p - 1n) * (p - 2n) * (p - 3n)) / (3n * 2n * 1n))}`;
	};
	console.log(fn());
};
main();
