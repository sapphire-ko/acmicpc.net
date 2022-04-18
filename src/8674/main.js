const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split(' ').map((x) => parseInt(x, 10));
};

const main = () => {
	const [a, b] = read();
	if (a % 2 === 0 || b % 2 === 0) {
		console.log(0);
	} else {
		console.log(Math.min(a, b));
	}
};
main();
