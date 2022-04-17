const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split(' ').map((x) => parseInt(x, 10));
};

const main = () => {
	const [a, b] = read();
	if (a === b) {
		console.log(a);
	} else {
		console.log(Math.max(a, b));
	}
};
main();
