const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split('\n').map((x) => x.split(' ').map((x) => parseInt(x, 10)));
};

const fn = (x) => {
	return x[0] * 6 + x[1] * 3 + x[2] * 2 + x[3] * 1 + x[4] * 2;
};

const main = () => {
	const [a, b] = read();
	console.log(`${fn(a)} ${fn(b)}`);
};
main();
