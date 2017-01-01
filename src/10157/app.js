var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n = s.shift().split(' ').map(function(e) { return parseInt(e); });
var k = parseInt(s.shift());
var t = [];
if(k > (n[0] * n[1])) {
  console.log(0);
}
else {
  for(var i = 0; i < n[1]; ++i) {
    t.push([]);
    for(var j = 0; j < n[0]; ++j) {
      t[i].push(-1);
    }
  }
  var x = 0;
  var y = 0;
  var dx = [0, 1, 0, -1];
  var dy = [1, 0, -1, 0];
  var d = 0;
  t[y][x] = 1;
  for(var i = 2; i <= k; ++i) {
    if(t[y + dy[d]] === undefined || t[y + dy[d]][x + dx[d]] !== -1) {
      ++d;
      d %= 4;
    }
    x += dx[d];
    y += dy[d];
    t[y][x] = i;
  }
  console.log((x + 1) + ' ' + (y + 1));
}
