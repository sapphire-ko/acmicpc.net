const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const x = [...new Array(26)].fill(-1);
	const a = 'a'.charCodeAt(0);
	for (const p of Object.entries(input)) {
		const b = p[1].charCodeAt(0) - a;
		if (x[b] !== -1) {
			continue;
		}
		x[b] = p[0];
	}
	console.log(x.join(' '));
};
main();
