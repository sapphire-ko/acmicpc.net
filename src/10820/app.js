var s = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(function(e) { return (e.length > 0); }).map(function(e) { return e.split(''); });
var a = '';
for(var i = 0; i < s.length; ++i) {
  var x = [0, 0, 0, 0];
  for(var j = 0; j < s[i].length; ++j) {
    var k = s[i][j].charCodeAt();
    if(k >= 97 && k <= 122) {
      ++x[0]
    }
    else if(k >= 65 && k <= 90) {
      ++x[1];
    }
    else if(k >= 48 && k <= 57) {
      ++x[2];
    }
    else if(s[i][j] === ' ') {
      ++x[3];
    }
  }
  a += x.join(' ') + '\n';
}
console.log(a.trim());
