var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i === 0 ? false : e); })[0].split(' ').map(function(e) { return parseInt(e); });
var m = Math.max.apply(Math, input);
console.log((input.map(function(e) {
  return e / m * 100;
}).reduce(function(prev, curr) { return prev + curr; }) / input.length).toFixed(2));
