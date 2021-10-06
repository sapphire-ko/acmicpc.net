const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = parseInt(input, 10);
	if (p % 2 === 0) {
		const q = p / 2 + 1;
		console.log(q * q);
	}
	else {
		const q = (p + 1) / 2
		console.log((q + 1) * q);
	}
};
main();
