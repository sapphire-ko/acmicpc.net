var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n = parseInt(s.shift());
for(var i = 0; i < n; ++i) {
  var x = parseInt(s.shift().split(' ')[0]);
  var k = [];
  for(var j = 0; j < x; ++j) {
    k.push(s.shift().split('').reverse().join(''));
  }
  console.log(k.join('\n'));
}
