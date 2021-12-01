const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q] = input.split('\n').map(x => parseInt(x, 10));

	const r = [
		'TroyMartian',
		'VladSaturnian',
		'GraemeMercurian',
	];
	console.log(r.filter((_, i) => {
		switch (i) {
			case 0: {
				return p >= 3 && q <= 4;
			}
			case 1: {
				return p <= 6 && q >= 2;
			}
			case 2: {
				return p <= 2 && q <= 3;
			}
		}
	}).join('\n'))
};
main();
