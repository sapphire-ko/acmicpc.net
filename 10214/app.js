var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
var t = parseInt(input.pop());
var s = '';
for(var j = 0; j < t; ++j) {
  var y = 0, k = 0;
  for(var i = 0; i < 9; ++i) {
    var e = input.pop().split(' ');
    y += parseInt(e[0]);
    k += parseInt(e[1]);
  }
  if(y > k) {
    s += 'Yonsei\n';
  }
  else if(y === k) {
    s += 'Draw\n';
  }
  else {
    s += 'Korea\n';
  }
}
console.log(s.trim());
