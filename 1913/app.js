var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
var s = [];
for(var i = 0; i < n[0]; ++i) {
  s.push([]);
  for(var j = 0; j < n[0]; ++j) {
    s[i].push(-1);
  }
}
var x = -1, y = 0;
var c = n[0];
var i = (n[0] * n[0]);
var k;
while(true) {
  if(c % 2 === 1) {
    for(var j = 0; j < c; ++j) {
      x += 1;
      s[x][y] = i;
      if(i === n[1]) {
        k = x + ' ' + y;
      }
      --i;
    }
    --c;
    for(var j = 0; j < c; ++j) {
      y += 1;
      s[x][y] = i;
      if(i === n[1]) {
        k = x + ' ' + y;
      }
      --i;
    }
  }
  else {
    for(var j = 0; j < c; ++j) {
      x -= 1;
      s[x][y] = i;
      if(i === n[1]) {
        k = x + ' ' + y;
      }
      --i;
    }
    --c;
    for(var j = 0; j < c; ++j) {
      y -= 1;
      s[x][y] = i;
      if(i === n[1]) {
        k = x + ' ' + y;
      }
      --i;
    }
  }
  if(i === 0) {
    break;
  }
}
console.log(s.map(function(e) { return e.join(' '); }).join('\n'));
console.log(k.split(' ').map(function(e) { return (parseInt(e) + 1); }).join(' '));
