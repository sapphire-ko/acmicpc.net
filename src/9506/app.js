var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
n.pop();
console.log(n.map(function(e) {
  var x = [1];
  for(var i = 2; i <= Math.sqrt(e); ++i) {
    if(e % i === 0) {
      x.push(i);
      x.push(e / i);
    }
  }
  var k = x.reduce(function(prev, curr) { return prev + curr; });
  if(k === e) {
    return e + ' = ' + x.sort(function(a, b) { return (a - b); }).join(' + ');
  }
  else {
    return e + ' is NOT perfect.';
  }
}).join('\n'));
