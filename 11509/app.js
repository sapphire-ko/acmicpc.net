var c = 0;
var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e) { return parseInt(e); });
var i = 0;
while(s.filter(function(e) { return (e !== 0); }).length > 0) {
  var k = s[i] - 1;
//  console.log(k);
  if(k === -1) {
    ++i;
    continue;
  }
  s[i] = 0;
  for(var j = (i + 1); (j < s.length) && k > 0; ++j) {
    if(s[j] === k) {
      s[j] = 0;
      --k;
    }
  }
  console.log(k + ' ' + j);
  ++c;
  ++i;
}
console.log(c);
