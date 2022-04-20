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
		const input = buffer.map((x) => x.split(' ').map((x) => parseInt(x, 10)));
		main(input);
	});
})();

const main = ([n, m, ...input]) => {
	const p = {};
	for (let i = 0; i < n; ++i) {
		p[i + 1] = { nodes: [] };
	}
	// console.log(p);
	for (const [a, b] of input) {
		p[a].nodes.push(p[b]);
		p[b].nodes.push(p[a]);
	}
	// console.log(p);
	const fn = (x) => {
		if (x.x) {
			return 0;
		}
		x.x = 1;
		let c = 0;
		for (const y of x.nodes) {
			if(y.x) {
				continue;
			}
			c += 1 + fn(y);
		}
		return c;
	};
	console.log(fn(p[1]));
};
