const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q] = input.split(' ').map(x => parseInt(x, 10));

	const x = p + q;
	const y = p - q;
	if (x < 0 || y < 0) {
		console.log(-1);
	}
	else if (x % 2 === 1 || y % 2 === 1) {
		console.log(-1);
	}
	else {
		const a = x / 2;
		const b = y / 2;
		console.log(`${Math.max(a, b)} ${Math.min(a, b)}`);
	}
};
main();
