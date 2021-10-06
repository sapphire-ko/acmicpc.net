const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const a = ['[', ']', '(', ')'];

const main = () => {
	const p = input.split('\n').slice(0, -1);

	const fn = x => {
		const p = x.split('').filter(x => a.includes(x));
		const q = [];
		while (p.length > 0) {
			const r = p.shift();
			switch (r) {
				case '(':
				case '[':
					q.push(r);
					break;
				case ')': {
					if (q[q.length - 1] !== '(') {
						return false;
					}
					q.pop();
					break;
				}
				case ']': {
					if (q[q.length - 1] !== '[') {
						return false;
					}
					q.pop();
					break;
				}
			}
		}
		return q.length === 0;
	};
	console.log(p.map(x => fn(x) ? 'yes' : 'no').join('\n'));
};
main();
