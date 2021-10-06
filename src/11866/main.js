const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q] = input.split(' ').map(x => parseInt(x, 10));

	let r = [...new Array(p)].map((_, i) => i + 1);
	const s = [];

	let prev = 0;
	while (r.length > 0) {
		const x = (prev + q - 1) % r.length;
		const y = r.splice(x, 1)[0];
		s.push(y);
		prev = x;
	}
	console.log(`<${s.join(', ')}>`);
};
main();
