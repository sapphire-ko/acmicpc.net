const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input;
};

const main = () => {
	const input = read();
	console.log(input === '0' ? 'YONSEI' : 'Leading the Way to the Future');
};
main();
