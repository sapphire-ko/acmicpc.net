var c = 0;
var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e) { return parseInt(e); });
var i = 0;
while(s.length > 0) {
  ++c;
  var h = s.splice(0, 1)[0] - 1;
  var j = 0;
  while(h > 0 && j <= s.length) {
    if(s[j] === h) {
      s.splice(j, 1);
      --j;
      --h;
    }
    ++j;
  }
  ++i;
};
console.log(c);
