const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split('\n').map((x) => parseInt(x, 10));
};

const main = () => {
	const [a, b] = read();
	console.log(Math.abs(a - b));
};
main();
