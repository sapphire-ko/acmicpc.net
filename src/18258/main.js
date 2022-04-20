(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	const x = [];
	const q = [];
	let i = 0;
	rl.on('line', (line) => {
		if (line.startsWith('push ')) {
			q.push(line.split(' ')[1]);
			return;
		}
		if (line === 'pop') {
			if (q.length === i) {
				x.push(-1);
			} else {
				x.push(q[i]);
				i += 1;
			}
			return;
		}
		if (line === 'size') {
			x.push(q.length - i);
			return;
		}
		if (line === 'empty') {
			x.push(q.length - i === 0 ? 1 : 0);
			return;
		}
		if (line === 'front') {
			x.push(q[i] ?? -1);
			return;
		}
		if (line === 'back') {
			if (q.length === i) {
				x.push(-1);
			} else {
				x.push(q[q.length - 1]);
			}
			return;
		}
	});
	rl.on('close', () => {
		console.log(x.join('\n'));
	});
})();
