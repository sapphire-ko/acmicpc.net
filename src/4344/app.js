var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return e.split(' ').filter(function(e, i) { return (i !== 0); }).map(function(e) { return parseInt(e); }); });
console.log(n.map(function(e) {
  var a = e.reduce(function(prev, curr) { return prev + curr; }) / e.length;
  return (Math.round((e.filter(function(f) { return f > a; }).length / e.length) * 100000) / 1000).toFixed(3) + '%';
}).join('\n'));
