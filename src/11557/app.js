var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
var a = '';
var x = parseInt(n.pop());
for(var i = 0; i < x; ++i) {
  var y = parseInt(n.pop());
  var k = [];
  for(var j = 0; j < y; ++j) {
    k.push(n.pop().split(' '));
  }
  k.sort(function(a, b) { return (parseInt(b[1]) - parseInt(a[1])); });
  a += (i === 0 ? '' : '\n') + k[0][0];
}
console.log(a);
