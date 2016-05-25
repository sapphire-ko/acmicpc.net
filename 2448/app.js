var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); }).map(function(e) { return Math.round(Math.log(e / 3) / Math.log(2)); })[0];
var c = [['  *  ', ' * * ', '*****']];
for(var i = 1; i <= n; ++i) {
  var x = [];
  var y = 3 * Math.pow(2, (i - 1));
  var z = y * 2;
  var t = '';
  for(var j = 0; j < y; ++j) {
    t += ' ';
  }
  for(var j = 0; j < z; ++j) {
    if(Math.floor(j / y) === 0) {
      x.push(t + c[i - 1][j % y] + t);
    }
    else {
      x.push(c[i - 1][j % y] + ' '+ c[i - 1][j % y]);
    }
  }
  c.push(x);
}
console.log(c.pop().join('\n'));
