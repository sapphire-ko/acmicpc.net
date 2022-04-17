const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split('\n').map((x) => x.split(' '));
};

const main = () => {
	const [a, b] = read();
	console.log(b.filter((x) => x === a[0]).length);
};
main();
