var a = [[0, 0, 0, 1], [0, 0, 0, 2], [0, 0, 0, 3]];
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) {
  return (i === 0 ? false : e);
}).forEach(function(e) {
  e.split(' ').forEach(function(e, i) {
    var s = parseInt(e);
    a[i][0] += s;
    if(s === 3) {
      ++a[i][1];
    }
    else {
      ++a[i][2];
    }
  });
});
a = a.sort(function(a, b) {
  return (b[0] - a[0] || b[1] - a[1] || b[2] - a[2]);
});
var f = true;
for(var i = 1; i < 3; ++i) {
  if(a[i][0] === a[0][0]) {
    f = false;
  }
}
if(f) {
  console.log(a[0][3] + ' ' + a[0][0]);
}
else {
  f = true;
  for(var i = 1; i < 3; ++i) {
    if(a[i][1] === a[0][1]) {
      f = false;
    }
  }
  if(f) {
    console.log(a[0][3] + ' ' + a[0][0]);
  }
  else {
    f = true;
    for(var i = 1; i < 3; ++i) {
      if(a[i][2] === a[0][2]) {
        f = false;
      }
    }
    if(f) {
      console.log(a[0][3] + ' ' + a[0][0]);
    }
    else {
      console.log('0 ' + a[0][0]);
    }
  }
}
