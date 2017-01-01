var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var k = s.shift().split(' ').map(function(e) { return parseFloat(e); });
var c = [];
s.pop();
s = s.map(function(e) { var x = e.split(''); x.pop(); return x; });
var x = 1;
for(var i = 0; i < k[1]; ++i) {
  var d = [];
  for(var j = 0; j < k[0]; ++j) {
    d.push(-1);
  }
  c.push(d);
}
console.log(c);
for(var i = 0; i < k[1]; ++i) {
  for(var j = 0; j < k[0]; ++j) {
    var p = s[2 * i][2 * j];
    var q = s[2 * i][2 * j + 1];
    var r = s[2 * i + 1][2 * j];
    var t = s[2 * i + 1][2 * j + 1];
    console.log(p, q, r, t);
    if(t === 'O') {
      c[i][j] = -1;
      ++x;
    }
    else {
      if(q === '.') {
        c[i][j] = c[i - 1][j];
      }
      else if(r === '.') {
        c[i][j] = c[i][j - 1];
      }
      else {
        c[i][j] = x;
      }
    }
  }
}
var d = true;
var y = k[2];
for(var i = 0; i <= k[1]; i += 0.5) {
  var t = y;
  if(d) {
    y -= 0.5;
  }
  else {
    y += 0.5;
  }
  console.log(i, y);
  if(d) {
    console.log(d, Math.floor(y));
  }
  else {
    console.log(d, Math.floor(y) - 1);
  }
  if(y === 0) {
    d = false;
  }
  else if(y === k[0]) {
    d = true;
  }
}
console.log(c);
