var n = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(function (e) {
		return parseInt(e);
	});
var c = {
	1: 1,
	2: 1,
};
function f(n) {
	if (n < 2) {
		return c[n];
	} else {
		if (c[n] === undefined) {
			c[n] = f(n - 1) + f(n - 2);
			return c[n];
		} else {
			return c[n];
		}
	}
}
var x = [f(n[0] - 2), f(n[0] - 1)];
for (var i = 0; i <= n[1] / x[0]; ++i) {
	if (i > 0 && (n[1] - x[0] * i) % x[1] === 0) {
		break;
	}
}
console.log(i);
console.log((n[1] - x[0] * i) / x[1]);
