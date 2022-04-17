const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split('\n').map((x) => x.split(' ').map((x) => parseInt(x, 10)));
};

const main = () => {
	const [a, b] = read();

	const p = Math.min(a[0], a[2], b[0], b[2]);
	const q = Math.max(a[0], a[2], b[0], b[2]);
	const r = Math.min(a[1], a[3], b[1], b[3]);
	const s = Math.max(a[1], a[3], b[1], b[3]);

	const x = Math.max(q - p, s - r);

	console.log(x * x);
};
main();
