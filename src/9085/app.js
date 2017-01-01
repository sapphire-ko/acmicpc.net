var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
var n = parseInt(s.pop());
var a = '';
for(var i = 0; i < n; ++i) {
  s.pop();
  if(i !== 0) {
    a += '\n';
  }
  a += s.pop().split(' ').reduce(function(prev, curr) { return prev + parseInt(curr); }, 0);
}
console.log(a);
