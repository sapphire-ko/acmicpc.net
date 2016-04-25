var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
var h = parseInt(input.pop().split(' ')[1]);
var cave = input.reverse().map(function(e) { return parseInt(e); });
var max = 0;
var a = Array.apply(null, Array(h)).map(function(e, s) {
  var c = cave.map(function(e, i) {
    if(i % 2 === 0) {
      if((s + 1) > e) {
        return 1;
      }
      else {
        return 0;
      }
    }
    else {
      if((s + 1) > (h - e)) {
        return 0;
      }
      else {
        return 1;
      }
    }
  }).reduce(function(prev, curr) { return prev + curr; });
  max = Math.max(max, c);
  return c;
});
console.log(max + ' ' + a.filter(function(e) { return (e === max); }).length);
