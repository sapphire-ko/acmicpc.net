const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split('\n');
};

const main = () => {
	const input = read();
	const p = input.filter((x) => x === 'W').length;
	const fn = () => {
		if (p >= 5) {
			return 1;
		}
		if (p >= 3) {
			return 2;
		}
		if (p > 1) {
			return 3;
		}
		return -1;
	};
	console.log(fn());
};
main();
