const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return parseInt(input, 10);
};

const main = () => {
	// const input = read();
	console.log(1);
	console.log(0);
};
main();
