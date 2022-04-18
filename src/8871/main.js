const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return parseInt(input, 10);
};

const main = () => {
	const input = read();
	const p = input + 1;
	console.log(`${p * 2} ${p * 3}`)
};
main();
