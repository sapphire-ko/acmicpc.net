const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = parseInt(input, 10);

	const t = {
		1: 0,
	};

	for (let x = 1; x < p; ++x) {
		{
			const q = x + 1;
			if (!t[q]) {
				t[q] = t[x] + 1;
			}
			else {
				t[q] = Math.min(t[q], t[x] + 1);
			}
		}
		{
			const q = x * 2;
			if (!t[q]) {
				t[q] = t[x] + 1;
			}
			else {
				t[q] = Math.min(t[q], t[x] + 1);
			}
		}
		{
			const q = x * 3;
			if (!t[q]) {
				t[q] = t[x] + 1;
			}
			else {
				t[q] = Math.min(t[q], t[x] + 1);
			}
		}
	};
	console.log(t[p]);
};
main();
