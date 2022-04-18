const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split(' ').map((x) => parseInt(x, 10));
};

const main = () => {
	const [k, w, m] = read();
	console.log(Math.ceil((w - k) / m));
};
main();
