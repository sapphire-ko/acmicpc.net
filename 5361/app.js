var x = [
  350.34,
  230.90,
  190.55,
  125.30,
  180.90
];
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }).map(function(e, i) { return (e * x[i]); }).reduce(function(p, c) { return (p + c); }).toFixed(2); }).map(function(e) {
  return '$' + e;
}).join('\n'));
