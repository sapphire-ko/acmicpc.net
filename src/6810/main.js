const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split('\n').map((x) => parseInt(x, 10));
};

const main = () => {
	const input = read();
	const x = 9 * 1 + 7 * 3 + 8 * 1 + 0 * 3 + 9 * 1 + 2 * 3 + 1 * 1 + 4 * 3 + 1 * 1 + 8 * 3;
	console.log(`The 1-3-sum is ${x + input[0] + input[1] * 3 + input[2]}`);
};
main();
