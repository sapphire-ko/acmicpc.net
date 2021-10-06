const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('\n').slice(0, -1).map(x => x.split(''));

	for (const q of p) {
		let flag = true;
		while (flag && q.length > 1) {
			const x = q.shift();
			const y = q.pop();
			if (x !== y) {
				flag = false;
			}
		}
		console.log(flag ? 'yes' : 'no');
	}
};
main();
