const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return parseFloat(input);
};

const main = () => {
	const input = read();

	const p = 3.785411784;
	const q = 1609.344;

	const x = (((1 / input) * p) / q) * 100 * 1000;
	console.log(x);
};
main();
