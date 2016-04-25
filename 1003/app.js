var a = [0, 1];

function f(n) {
  if(a[n] === undefined) {
    a.push(f(n - 1) + f(n - 2));
    return a[a.length - 1];
  }
  else {
    return a[n];
  }
}

console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i === 0 ? false : e); }).map(function(e) {
  e = parseInt(e);
  f(e);
  var b;
  if(e === 0) {
    b = 1;
  }
  else if(e === 1) {
    b = 0;
  }
  else {
    b = a[e - 1];
  }
  return b + ' ' + a[e];
}).join('\n'));
