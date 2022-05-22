(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	const buffer = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		const input = buffer.map((x) => x.split(' ').map(BigInt));
		main(input);
	});
})();

const main = ([[n], a, b]) => {
	const getOperator = (x) => {
		switch (x) {
			case 0: {
				return '+';
			}
			case 1: {
				return '-';
			}
			case 2: {
				return '*';
			}
			case 3: {
				return '/';
			}
		}
	};
	const fn2 = (p) => {
		let x = a[0];
		for (let i = 0; i < p.length; ++i) {
			switch (p[i]) {
				case '+': {
					x = x + a[i + 1];
					break;
				}
				case '-': {
					x = x - a[i + 1];
					break;
				}
				case '*': {
					x = x * a[i + 1];
					break;
				}
				case '/': {
					x = x / a[i + 1];
					break;
				}
			}
		}
		// console.log(p, x);
		return x;
	};
	let max = -100_000_000_000n;
	let min = 100_000_000_000n;
	const fn1 = (p, q) => {
		if (p.length === Number(n) - 1) {
			const x = fn2(p);
			max = max < x ? x : max;
			min = min < x ? min : x;
			return;
		}
		for (let i = 0; i < q.length; ++i) {
			const r = b[i] - q[i];
			for (let j = 0n; j < r; ++j) {
				const x = getOperator(i);
				p.push(x);
				q[i] += j + 1n;
				fn1(p, q);
				p.pop();
				q[i] -= j + 1n;
			}
		}
	};
	fn1([], [0n, 0n, 0n, 0n]);
	console.log(`${max}\n${min}`);
};
