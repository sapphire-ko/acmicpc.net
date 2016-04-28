var a = {};
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  var c = Object.keys(a).filter(function(f) { return (f !== e); }).reduce(function(prev, curr) { return prev + a[curr]; }, 0);
  var x = a[e] === undefined ? 0 : a[e];
  if(c < x) {
    ++a[e];
    return 1;
  }
  else {
    if(a[e] === undefined) {
      a[e] = 1;
    }
    else {
      ++a[e];
    }
    return 0;
  }
}).reduce(function(prev, curr) { return prev + curr; }));
