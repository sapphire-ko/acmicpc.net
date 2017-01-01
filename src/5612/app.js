var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.shift();
var x = [parseInt(s.shift())];
for(var i = 0; i < s.length; ++i) {
  var k = s[i].split(' ').map(function(e) { return parseInt(e); });
  x.push(x[i] + k[0] - k[1]);
  if(x[i + 1] < 0) {
    break;
  }
};
if(x[x.length - 1] < 0) {
  console.log(0);
}
else {
  console.log(Math.max.apply(Math, x));
}
