let s = '';
require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.split('\n')
	.forEach((x, i) => {
		if (i === 0 || !x) {
			return;
		}
		s +=
			x
				.split(' ')
				.map((x) => parseInt(x, 10))
				.reduce((a, b) => a + b) + '\n';
	});
process.stdout.write(s);
