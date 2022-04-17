const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return parseInt(input, 10);
};

const main = () => {
	const input = read();

	const p = (input / 2) * ((Math.sqrt(3) * input) / 2);
	console.log(p);
};
main();
