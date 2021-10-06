const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('\n');
	const q = parseInt(p[0]);
	const r = p.slice(1);

	const fn = () => {
		const s = r.splice(0, 3);
		const t = s[0];
		const u = s[2] === '[]' ? [] : s[2].substr(1, s[2].length - 2).split(',').map(x => parseInt(x, 10));
		let c = 0;
		for (const v of t) {
			if (v === 'R') {
				c += 1;
			}
			else {
				if (u.length === 0) {
					return 'error';
				}
				if (c % 2 === 0) {
					u.shift();
				}
				else {
					u.pop();
				}
			}
		}
		if (c % 2 === 0) {
			return `[${u.join(',')}]`;
		}
		else {
			return `[${u.reverse().join(',')}]`;
		}
	};
	console.log([...new Array(q)].map(_ => fn()).join('\n'));
};
main();
