const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split('\n').map((x) => parseInt(x, 10));
};

const main = () => {
	const [a, b] = read();
	const x = a * 8 + b * 3;
	console.log(x - 28);
};
main();
