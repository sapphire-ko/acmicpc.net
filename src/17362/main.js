(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	const buffer = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		const input = parseInt(buffer[0], 10);
		main(input);
	});
})();

const main = (input) => {
	const p = input % 8;
	switch (p) {
		case 1: {
			console.log(1);
			break;
		}
		case 2:
		case 0: {
			console.log(2);
			break;
		}
		case 3:
		case 7: {
			console.log(3);
			break;
		}
		case 4:
		case 6: {
			console.log(4);
			break;
		}
		case 5: {
			console.log(5);
			break;
		}
	}
};
