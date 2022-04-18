const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split(' ').map((x) => parseInt(x, 10));
};

const main = () => {
	const [x, k] = read();
	const p = x - k;
	if (p >= k * 2 + k * 4) {
		console.log((k + k * 2 + k * 4) * 1000);
	} else if (p >= k * 2 + k / 2) {
		console.log((k + k * 2 + k / 2) * 1000);
	} else if (p >= k / 2 + k / 4) {
		console.log((k + k / 2 + k / 4) * 1000);
	} else {
		console.log(0);
	}
};
main();
