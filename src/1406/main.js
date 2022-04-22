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
		const input = buffer;
		main(input);
	});
})();

const fn1 = (x) => {
	let s = {
		prev: null,
		next: null,
		value: '',
	};
	let p = s;
	const y = x.split('');
	for (let i = 0; i < y.length; ++i) {
		const c = {
			prev: p,
			next: null,
			value: y[i],
		};
		p.next = c;
		p = c;
	}
	return [s, p];
};

const fn2 = (x) => {
	const s = [];
	let c = x;
	while (c !== null) {
		s.push(c.value);
		c = c.next;
	}
	return s.join('');
};

const main = (input) => {
	let [a, b] = fn1(input[0]);
	for (let i = 2; i < input.length; ++i) {
		const [p, q] = input[i].split(' ');
		// console.log('b', b);
		// console.log(fn2(a), p, q);
		switch (p) {
			case 'L': {
				if (b.prev !== null) {
					b = b.prev;
				}
				break;
			}
			case 'D': {
				if (b.next !== null) {
					b = b.next;
				}
				break;
			}
			case 'B': {
				const p = b.prev;
				const q = b.next;
				if(p !== null) {
					p.next = q;
					if(q !== null) {
						q.prev = p;
					}
					b = p;
				}
				break;
			}
			case 'P': {
				const c = {
					prev: b,
					next: b.next,
					value: q,
				};
				if (b.next !== null) {
					b.next.prev = c;
				}
				b.next = c;
				b = c;
				break;
			}
		}
	}
	console.log(fn2(a));
};
