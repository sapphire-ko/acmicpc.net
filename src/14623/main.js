const read = () => {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	return input.split('\n').map((x) =>
		x
			.split('')
			.map((x) => parseInt(x, 10))
			.reverse()
	);
};

const add = (a, b) => {
	const len = Math.max(a.length, b.length);
	const c = new Array(len);
	let carry = 0;
	for (let i = 0; i < len; ++i) {
		const x = (a[i] || 0) + (b[i] || 0) + carry;
		c[i] = x % 2;
		carry = Math.floor(x / 2);
		// console.log(x, c[i], carry);
	}
	if (carry === 1) {
		c.push(1);
	}
	return c;
};

const main = () => {
	const [b1, b2] = read();
	let k = [];
	for (let i = 0; i < b2.length; ++i) {
		const p = b2[i];
		if (p === 1) {
			const q = [...b1];
			for (let j = 0; j < i; ++j) {
				q.unshift(0);
			}
			// console.log(p, q);
			k = add(k, q);
			// console.log(k);
		}
	}
	console.log(k.reverse().join(''));
};
main();
