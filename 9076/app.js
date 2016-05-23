console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }).sort(function(a, b) { return (a - b); }); }).map(function(e) {
  e.shift();
  e.pop();
  if(e[2] - e[0] >= 4) {
    return 'KIN';
  }
  else {
    return e.reduce(function(p, c) { return (p + c); });
  }
}).join('\n'));
