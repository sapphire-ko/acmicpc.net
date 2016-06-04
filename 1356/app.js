var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) { return parseInt(e); });
var f = false;
for(var i = 1; i < s.length; ++i) {
  var x = s.slice(0, i).reduce(function(prev, curr) { return (prev * curr); }, 1);
  var y = s.slice(i).reduce(function(prev, curr) { return (prev * curr); }, 1);
  if(x === y) {
    f = true;
    break;
  }
}
console.log(f ? 'YES' : 'NO');
