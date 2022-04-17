const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split('\n').map((x) => parseInt(x, 10));
};

const main = () => {
	const [a, b, c, d, e] = read();

	if (a < 0) {
		const p = Math.abs(a);
		const q = b;
		console.log(p * c + d + q * e);
	} else {
		const q = b - a;
		console.log(q * e);
	}
};
main();
