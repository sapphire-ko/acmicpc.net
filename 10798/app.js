var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split('').reverse(); });
var a = '';
while(true) {
  var x = 0;
  for(var i = 0; i < s.length; ++i) {
    var c = s[i].pop();
    if(c === undefined) {
      ++x;
    }
    else {
      a += c;
    }
  }
  if(x === s.length) {
    break;
  }
}
console.log(a);
