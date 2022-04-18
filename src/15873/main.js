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
		const input = buffer[0];
		main(input);
	});
})();

const main = (input) => {
	switch (input.length) {
		case 2: {
			const p = parseInt(input.slice(0, 1), 10);
			const q = parseInt(input.slice(1, 2), 10);
			console.log(p + q);
			break;
		}
		case 3: {
			if(input[1] === '0') {
				const p = parseInt(input.slice(0, 2), 10);
				const q = parseInt(input.slice(2, 3), 10);
				console.log(p + q);
			}
			else {
				const p = parseInt(input.slice(0, 1), 10);
				const q = parseInt(input.slice(1, 3), 10);
				console.log(p + q);
			}
			break;
		}
		case 4: {
			const p = parseInt(input.slice(0, 2), 10);
			const q = parseInt(input.slice(2, 4), 10);
			console.log(p + q);
			break;
		}
	}
};
