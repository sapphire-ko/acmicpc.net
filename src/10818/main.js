const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [_, q] = input.split('\n').map(x => x.split(' ').map(x => parseInt(x, 10)));

	let x = -Infinity;
	let y = Infinity;

	for (const p of q) {
		if (p > x) {
			x = p;
		}
		if (p < y) {
			y = p;
		}
	}
	console.log(`${y} ${x}`);
};
main();
