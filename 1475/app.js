var a = Array.apply(null, Array(9)).map(function() { return 0; });
require('fs').readFileSync('/dev/stdin').toString().trim().split('').forEach(function(e) { var k = parseInt(e === '9' ? '6' : e); a[k] += (k === 6 ? 0.5 : 1); });
console.log(Math.ceil(Math.max.apply(Math, a)));
