const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split(' ').map((x) => parseInt(x, 10));
};

const main = () => {
	const [a, b, c] = read().sort((a, b) => a - b);
	if (a * a + b * b === c * c) {
		console.log(1);
	} else if (a === b && b === c) {
		console.log(2);
	} else {
		console.log(0);
	}
};
main();
