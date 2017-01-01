var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var l = s.shift().split(' ').map(function(e) { return parseInt(e); });
var n = l[0];
var k = l[1];
s = s.reverse().map(function(e) { return parseInt(e); });
var x = 0;
var i = 0;
var c = 0;
while(x !== k) {
  if((k - x) >= s[i]) {
    x += s[i];
    ++c;
  }
  else {
    ++i;
  }
}
console.log(c);
