var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split('').map(function(e) { return (e === '.' ? -1 : 0); }) });
for(var i = 0; i < s.length; ++i) {
  for(var j = 1; j < s[i].length; ++j) {
    if(s[i][j] !== 0 && s[i][j - 1] !== -1) {
      s[i][j] = s[i][j - 1] + 1;
    }
  }
}
console.log(s.map(function(e) { return e.join(' '); }).join('\n'));
