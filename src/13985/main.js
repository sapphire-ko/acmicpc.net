const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input;
};

const main = () => {
	const input = read();
	const a = parseInt(input[0], 10);
	const b = parseInt(input[4], 10);
	const c = parseInt(input[8], 10);
	const x = input[2];
	const fn = () => {
		switch (x) {
			case '+': {
				return a + b === c;
			}
			case '-': {
				return a - b === c;
			}
			case '*': {
				return a * b === c;
			}
			case '/': {
				return a / b === c;
			}
		}
	};
	console.log(fn() ? 'YES' : 'NO');
};
main();
