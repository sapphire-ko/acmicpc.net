const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split('\n').map((x) => BigInt(x));
};

const main = () => {
	const [a, b, c] = read();
	const x = (b - c) / a;
	console.log(x.toString());
};
main();
