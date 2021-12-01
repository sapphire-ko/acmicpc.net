const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`.trim();

const main = () => {
	const [p, q] = input.split('\n').map(x => parseInt(x, 10));
	const r = q - p;
	if (r <= 0) {
		console.log('Congratulations, you are within the speed limit!');
		return;
	}
	const fn = () => {
		if (r <= 20) {
			return 100;
		}
		if (r <= 30) {
			return 270;
		}
		return 500;
	}
	console.log(`You are speeding and your fine is $${fn()}.`);
};
main();
