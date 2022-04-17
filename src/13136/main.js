const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split(' ').map((x) => parseInt(x, 10));
};

const main = () => {
	const [r, c, n] = read();

	const x = Math.ceil(r / n) * Math.ceil(c / n);
	console.log(x);
};
main();
