var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
function c() {
  var a;
  for(var i = 0; i < (n.length - 1); ++i) {
    for(var j = i + 1; j < n.length; ++j) {
      a = [];
      for(var k = 0; k < n.length; ++k) {
        if(k !== i && k !== j) {
          a.push(n[k]);
        }
      }
      if(a.reduce(function(prev, curr) { return prev + curr; }) === 100) {
        return a;
      }
    }
  }
}
console.log(c().sort(function(a, b) { return (a - b); }).join('\n'));
