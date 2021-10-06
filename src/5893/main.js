const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const p = input.split('').reverse().map((x, i) => {
		if (x === '0') {
			return '0';
		}
		else {
			return '10001' + '0'.repeat(i);
		}
	});

	const fn = (a, b) => {
		const p = a.split('');
		const q = b.split('');

		let r = [];
		let carry = 0;
		while (p.length > 0 || q.length > 0) {
			const x = (p.pop() || '0') === '0' ? 0 : 1;
			const y = (q.pop() || '0') === '0' ? 0 : 1;

			const z = x + y + carry;

			r.push(z % 2);
			carry = z >= 2 ? 1 : 0;
		}
		if (carry > 0) {
			r.push(carry);
		}
		return r.reverse().join('');
	};

	console.log(p.reduce((a, b) => fn(a, b), '0'));
};
main();
