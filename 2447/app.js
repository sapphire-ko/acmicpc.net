var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); }).map(function(e) { return (Math.log(e) / Math.log(3)); }).map(function(e) { return Math.round(e); })[0];
var c = [['*']];
for(var i = 1; i <= n; ++i) {
  var x = [];
  var y = Math.pow(3, i - 1);
  var z = y * 3;
  for(var j = 0; j < z; ++j) {
    if(Math.floor(j / z * 3) !== 1) {
      x.push(c[i - 1][j % y] + c[i - 1][j % y] + c[i - 1][j % y]);
    }
    else {
      var t = '';
      for(var k = 0; k < y; ++k) {
        t += ' ';
      }
      x.push(c[i - 1][j % y] + t + c[i - 1][j % y]);
    }
  }
  c.push(x);
}
console.log(c.pop().join('\n'));
