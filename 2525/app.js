var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var x = s[0].split(' ').map(function(e) { return parseInt(e); });
var h = x[0], m = x[1], t = parseInt(s[1]);
m += t;
h += Math.floor(m / 60);
m %= 60;
h %= 24;
console.log(h + ' ' + m);
