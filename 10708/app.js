var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n = parseInt(s.shift());
var m = parseInt(s.shift());
var a = s.shift().split(' ').map(function(e) { return parseInt(e); });
var k = s.map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).map(function(e, i) {
  var x = [];
  var c = 0;
  for(var j = 0; j < e.length; ++j) {
    if(e[j] === a[i]) {
      x.push(1);
    }
    else {
      ++c;
      x.push(0);
    }
  }
  x[a[i] - 1] += c;
  return x;
});
for(var i = 1; i < k.length; ++i) {
  for(var j = 0; j < k[0].length; ++j) {
    k[0][j] += k[i][j];
  }
}
console.log(k[0].join('\n'));
