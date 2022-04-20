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
		buffer.shift();
		const input = buffer;
		main(input);
	});
})();

const main = (input) => {
	let c = 0;
	for (const x of input) {
		const fn = () => {
			const t = {
				[x[0]]: true,
			};
			let p = x[0];
			for (let i = 1; i < x.length; ++i) {
				if (x[i] === p) {
					continue;
				}
				if (t[x[i]] === undefined) {
					t[x[i]] = true;
					p = x[i];
					continue;
				}
				return false;
			}
			return true;
		};
		if (fn()) {
			c += 1;
		}
	}
	console.log(c);
};
