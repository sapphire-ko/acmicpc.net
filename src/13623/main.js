const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split(' ');
};

const main = () => {
	const x = read();
	if (x[0] === x[1]) {
		if (x[1] === x[2]) {
			console.log('*');
		} else {
			console.log('C');
		}
	} else {
		if (x[1] === x[2]) {
			console.log('A');
		} else {
			console.log('B');
		}
	}
};
main();
